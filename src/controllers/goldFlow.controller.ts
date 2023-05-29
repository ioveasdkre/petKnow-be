import { Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { GoldFlowService } from '../services/goldFlow.service';
import { IRequestBody } from '../types/handle.type';
// import { createOrderIdAesEncrypt, createOrderIdAesDecrypt } from '../utils/orderIdEncrypt.util';
import {
  IPostCardRequest,
  IPostCouponRequest,
  IPostCheckRequest,
} from '../viewModels/controllers/goldFlow.viewModel';

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
              "646e0e6ffa0eac0933c5a776",
              "646e0e6ffa0eac0933c5a778",
              "646e0e6ffa0eac0933c5a77e",
              "646e0e6ffa0eac0933c5a78c",
              "646e0e6ffa0eac0933c5a79b",
              "646e0e6ffa0eac0933c5a79c",
              "646e0e6ffa0eac0933c5a7ad",
              "646e0e6ffa0eac0933c5a7ae"
            ]
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": {
              "totalPrice": 28226,
              "shoppingCart": [
                {
                  "_id": "646b8121b65fd84dc4ab0af5",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.com/z/cute-funny-dog-stucks-her-tongue-26778597.jpg",
                  "level": "中階課程",
                  "time": 341312,
                  "total": 93,
                  "instructorName": "ffffff",
                  "price": 7251,
                  "discountPrice": null,
                  "isFree": false
                },
                {
                  "_id": "646b8121b65fd84dc4ab0af6",
                  "title": "高效狗狗訓練方法",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "level": "初階課程",
                  "time": 496794,
                  "total": 48,
                  "instructorName": "zihyin",
                  "price": 8155,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "youMightLike": [
                {
                  "_id": "646b8121b65fd84dc4ab0b45",
                  "title": "高效寵物旅宿訓練指南",
                  "cover": "https://thumbs.dreamstime.com/z/mixed-breed-cat-pug-red-bow-tie-sitting-maltese-dog-fro-front-white-background-129940127.jpg",
                  "level": "初階課程",
                  "time": 177234,
                  "total": 67,
                  "instructorName": "test",
                  "price": 7386,
                  "discountPrice": null,
                  "isFree": false
                },
                {
                  "_id": "646b8121b65fd84dc4ab0b5b",
                  "title": "兔兔的健康與飼養",
                  "cover": "https://thumbs.dreamstime.com/z/dog-cat-11133177.jpg",
                  "level": "初階課程",
                  "time": 340664,
                  "total": 23,
                  "instructorName": "zihyin",
                  "price": 7805,
                  "discountPrice": null,
                  "isFree": false
                }
              ]
            }
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema:{
            "statusCode": 500,
            "isSuccess": false,
            "message": "System error, please contact the system administrator"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const { courseIds } = req.body;

      const goldFlowService = new GoldFlowService();
      const { courseHierarchy, youMightLike } = await goldFlowService.postCardAsync(courseIds);

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
          youMightLike,
        });

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
        ...courseHierarchy,
        youMightLike,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCard [ 讀取購物車資料 ]

  //#region postCoupon [ 查詢單筆優惠卷 ]
  /** 查詢單筆優惠卷 */
  static async postCoupon(
    req: IRequestBody<IPostCouponRequest>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "查詢單筆優惠卷"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "courseIds": [
              "646e0e6ffa0eac0933c5a776",
              "646e0e6ffa0eac0933c5a778",
              "646e0e6ffa0eac0933c5a77e",
              "646e0e6ffa0eac0933c5a78c",
              "646e0e6ffa0eac0933c5a79b",
              "646e0e6ffa0eac0933c5a79c",
              "646e0e6ffa0eac0933c5a7ad",
              "646e0e6ffa0eac0933c5a7ae"
            ],
            "couponCode": "ycks7e6q"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": {
              "price": 688
            }
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
            "message": "Failure"
          }
        }
      * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema:{
            "statusCode": 500,
            "isSuccess": false,
            "message": "System error, please contact the system administrator"
          }
        }
      */
    //#endregion [ swagger說明文件 ]
    try {
      const { courseIds, couponCode } = req.body;

      const goldFlowService = new GoldFlowService();
      const courseTabs = await goldFlowService.mergeCourseTabsAsync(courseIds);

      if (!courseTabs)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const price = await goldFlowService.checkCouponCode(couponCode, courseTabs);

      if (!price)
        return handleResponse(res, HttpStatusCode.BadRequest, '輸入的優惠券代碼對此課程無效');

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, { price });
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCoupon [ 查詢單筆優惠卷 ]

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
                },
                {
                  "_id": "646f7e2f4802a2dbf6b3eb84",
                  "title": "高效狗狗訓練方法",
                  "cover": "https://thumbs.dreamstime.com/z/hunting-duck-dog-blind-29141083.jpg",
                  "level": "高階課程",
                  "time": 85.7,
                  "total": 85,
                  "instructorName": "test0514",
                  "price": 5282,
                  "discountPrice": 2586,
                  "isFree": false
                },
                {
                  "_id": "646f7e2f4802a2dbf6b3eb85",
                  "title": "狗狗訓練實戰指南",
                  "cover": "https://thumbs.dreamstime.com/z/dog-jumping-over-pool-water-29720697.jpg",
                  "level": "所有級別",
                  "time": 52.8,
                  "total": 87,
                  "instructorName": "RUBYTEST",
                  "price": 1288,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "discountedPrice": 6210,
              "platformCoupons": {
                "couponPrice": 812
              }
            }
          }
        }
        * #swagger.responses[400] = {
          description: "請求錯誤",
          schema: {
            "statusCode": 400,
            "isSuccess": false,
            "message": "Bad Request"
          }
        }
        * #swagger.responses[500] = {
          description: "伺服器發生錯誤",
          schema: {
            "statusCode": 500,
            "isSuccess": false,
            "message": "System error, please contact the system administrator"
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
