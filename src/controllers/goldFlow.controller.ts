import { Response, NextFunction } from 'express';
import { orderHasKey, orderHasIv, orderSalt } from '../config/env';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { GoldFlowService } from '../services/goldFlow.service';
import { IRequestBody } from '../types/handle.type';
import {
  IPostCardRequest,
  ICreateOrderRequest,
  IPostCheckRequest,
} from '../viewModels/controllers/goldFlow.viewModel';
import { IVerifyJwtTokenRequest as IRequestJwtBody } from '../viewModels/middlewares/verifyType.viewModel';

class GoldFlowController {
  //#region postCard [ 讀取購物車資料 ]
  /** 讀取購物車資料 */
  static async postCard(req: IRequestBody<IPostCardRequest>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "讀取購物車資料"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "courseIds": [
              "646f7e2f4802a2dbf6b3eb83",
              "646f7e2f4802a2dbf6b3eb84",
              "646f7e2f4802a2dbf6b3eb85"
            ],
            "couponCode": "ugyV1E8P"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "成功",
            "data": {
              "amt": 6210,
              "itemDesc": "646f7e2f4802a2dbf6b3eb83,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
              "totalPrice": 7022,
              "shoppingCart": [
                {
                  "_id": "646f7e2f4802a2dbf6b3eb83",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "level": "初階課程",
                  "time": 135.6,
                  "total": 53,
                  "instructorName": "RubyTest",
                  "price": 3148,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "courseIds": "646f7e2f4802a2dbf6b3eb83,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
              "discountedPrice": 6210,
              "couponPrice": 812,
              "id": "23fe572cb41032895ca6bf0aae176143ee63ce97a3096ed8a357e3f8b36565d33e95845bf85a8563bf3b9e66c6ee055f",
              "email": "AbcTest@gmail.com",
              "timeStamp": 1685783027,
              "merchantOrderNo": 1685783027
            }
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema:{
            "statusCode": 500,
            "isSuccess": false,
            "message": "系統發生錯誤，請聯繫系統管理員"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const { courseIds, couponCode } = req.body;

      const goldFlowService = new GoldFlowService();
      const { courseHierarchy, youMightLike } = await goldFlowService.chenkCardCoursesAsync(
        courseIds,
      );

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
          youMightLike,
        });
      else if (!couponCode) {
        delete courseHierarchy.uniqueTagNames;
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
          courseHierarchy,
          youMightLike,
        });  
      }

      const result = await goldFlowService.checkCardCouponAsync(courseHierarchy, couponCode);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
        ...result,
        youMightLike,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCard [ 讀取購物車資料 ]

  //#region createOrder [ 新增訂單 ]
  /** 新增訂單 */
  static async createOrder(
    req: IRequestJwtBody<ICreateOrderRequest>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "新增訂單"
    * #swagger.security = [
        {
          "apiKeyAuth": []
        }
      ]
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "courseIds": [
              "646f7e2f4802a2dbf6b3eb83",
              "646f7e2f4802a2dbf6b3eb84",
              "646f7e2f4802a2dbf6b3eb85"
            ],
            "couponCode": "ugyV1E8P"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": {
              "amt": 6210,
              "itemDesc": "646f7e2f4802a2dbf6b3eb83,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
              "totalPrice": 7022,
              "shoppingCart": [
                {
                  "_id": "646f7e2f4802a2dbf6b3eb83",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "level": "初階課程",
                  "time": 135.6,
                  "total": 53,
                  "instructorName": "RubyTest",
                  "price": 3148,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "discountedPrice": 6210,
              "couponPrice": 812
            }
          }
        }
        * #swagger.responses[400] = {
          description: "請求錯誤",
          schema: {
            "statusCode": 400,
            "isSuccess": false,
            "message": "錯誤的請求"
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema: {
            "statusCode": 500,
            "isSuccess": false,
            "message": "系統發生錯誤，請聯繫系統管理員"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const user = req.user;

      if (!user) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const { courseIds, couponCode } = req.body;

      const goldFlowService = new GoldFlowService();
      const courseHierarchy = await goldFlowService.checkCoursesAsync(courseIds);

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const timeStamp = Math.round(new Date().getTime() / 1000);
      const orderId = goldFlowService.createOrderId(timeStamp);

      const orderIdAesEncrypt = goldFlowService.orderIdAesEncrypt(
        orderId,
        orderHasKey,
        orderHasIv,
        orderSalt,
      );

      const order = await goldFlowService.checkOrderAsync(courseHierarchy, couponCode);

      order._id = orderIdAesEncrypt;
      order.email = user.email;
      order.timeStamp = timeStamp;
      order.merchantOrderNo = timeStamp;

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, order);
    } catch (err) {
      next(err);
    }
  }
  //#endregion createOrder [ 新增訂單 ]

  //#region postCheckOrder [ 讀取確認訂單資料 ]
  /** 讀取確認訂單資料 */
  static async postCheckOrder(
    req: IRequestBody<IPostCheckRequest>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "讀取確認訂單資料"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "courseIds": [
              "646f7e2f4802a2dbf6b3eb83",
              "646f7e2f4802a2dbf6b3eb84",
              "646f7e2f4802a2dbf6b3eb85"
            ],
            "couponCode": "ugyV1E8P"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": {
              "amt": 6210,
              "itemDesc": "646f7e2f4802a2dbf6b3eb83,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
              "totalPrice": 7022,
              "shoppingCart": [
                {
                  "_id": "646f7e2f4802a2dbf6b3eb83",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "level": "初階課程",
                  "time": 135.6,
                  "total": 53,
                  "instructorName": "RubyTest",
                  "price": 3148,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "discountedPrice": 6210,
              "couponPrice": 812
            }
          }
        }
        * #swagger.responses[400] = {
          description: "請求錯誤",
          schema: {
            "statusCode": 400,
            "isSuccess": false,
            "message": "錯誤的請求"
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema: {
            "statusCode": 500,
            "isSuccess": false,
            "message": "系統發生錯誤，請聯繫系統管理員"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const { courseIds, couponCode } = req.body;

      const goldFlowService = new GoldFlowService();
      const courseHierarchy = await goldFlowService.checkCoursesAsync(courseIds);

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const order = await goldFlowService.checkOrderAsync(courseHierarchy, couponCode);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, order);
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCheckOrder [ 讀取確認訂單資料 ]
}

export { GoldFlowController };
