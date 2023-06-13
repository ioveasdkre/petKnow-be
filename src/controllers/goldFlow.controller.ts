import { Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import {
  merchantId,
  version,
  goldFlowHashKey,
  goldFlowHashIv,
  goldFlowalgorithm,
  orderHasKey,
  orderHasIv,
  orderSalt,
  orderalgorithm,
} from '../config/env';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { GoldFlowService } from '../services/goldFlow.service';
import { IRequestBody } from '../types/handle.type';
import { IOrderParams as IOrder } from '../types/goldFlow.type';
import { isValidObjectId } from '../utils/mongoose.util';
import {
  ISaveOrUpdateUserCartCourse,
  IUpdateUserCartCourse,
  ISaveOrUpdateUserCartCoupon,
  IPostCartRequest,
  ICreateOrderRequest,
  IPostCheckRequest,
} from '../viewModels/controllers/goldFlow.viewModel';
import { IRequestJwtBody } from '../viewModels/middlewares/verifyType.viewModel';

class GoldFlowController {
  //#region saveOrUpdateUserCartCourse [ 使用者 新增或更新購物車 - 課程資料 ]
  /** 使用者 新增或更新購物車 - 課程資料 */
  static async saveOrUpdateUserCartCourse(
    req: IRequestJwtBody<ISaveOrUpdateUserCartCourse>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "使用者 新增或更新購物車 - 課程資料"
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
            "courseId": "6482b94965829859fd1d1838"
          }
        }
     * #swagger.responses[200] = {
          description: "更新成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "更新成功"
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
      const user = req.user;
      const { courseId } = req.body;

      if (!user)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.InvalidCredentials);
      else if (!isValidObjectId(courseId))
        return handleResponse(res, HttpStatusCode.BadRequest, '無此課程');

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.saveOrUpdateUserCartCourseAsync(user._id, courseId);

      if (result === 0) return handleResponse(res, HttpStatusCode.BadRequest, '無此課程');
      else if (result === 1) return handleResponse(res, HttpStatusCode.OK, '已儲存在購物車當中');
      else if (result === false)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion saveOrUpdateUserCartCourse [ 使用者 新增或更新購物車 - 課程資料 ]

  //#region deleteUserCartCourse [ 使用者 移除購物車 - 課程資料 ]
  /** 使用者 移除購物車 - 課程資料 */
  static async deleteUserCartCourse(
    req: IRequestJwtBody<IUpdateUserCartCourse>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "使用者 移除購物車 - 課程資料"
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
            "courseId": "6482b94965829859fd1d1838"
          }
        }
     * #swagger.responses[200] = {
          description: "更新成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "更新成功"
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
      const user = req.user;
      const { courseId } = req.body;

      if (!user)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.InvalidCredentials);
      else if (!isValidObjectId(courseId))
        return handleResponse(res, HttpStatusCode.BadRequest, '無此課程');

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.deleteUserCartCourseAsync(user._id, courseId);

      if (result === 1) return handleResponse(res, HttpStatusCode.BadRequest, '不存在於購物車');
      else if (result === false)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.DeleteFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.DeleteSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion deleteUserCartCourse [ 使用者 移除購物車 - 課程資料 ]

  //#region saveOrUpdateUserCartCoupon [ 使用者 新增或更新購物車 - 優惠卷資料 ]
  /** 使用者 新增或更新購物車 - 優惠卷資料 */
  static async saveOrUpdateUserCartCoupon(
    req: IRequestJwtBody<ISaveOrUpdateUserCartCoupon>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "使用者 新增或更新購物車 - 優惠卷資料"
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
            "couponCode": "bvCyXjGL"
          }
        }
     * #swagger.responses[200] = {
          description: "更新成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "更新成功"
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
      const user = req.user;
      const { couponCode } = req.body;

      if (!user || !couponCode)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.saveOrUpdateUserCartCouponAsync(user._id, couponCode);

      if (result === 0) return handleResponse(res, HttpStatusCode.BadRequest, '無此課程');
      else if (result === 1)
        return handleResponse(res, HttpStatusCode.BadRequest, '優惠碼不存在或不符合條件');
      else if (result === false)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion saveOrUpdateUserCartCoupon [ 使用者 新增或更新購物車 - 優惠卷資料 ]

  //#region deleteUserCartCoupon [ 使用者 移除購物車 - 優惠卷資料 ]
  /** 使用者 移除購物車 - 優惠卷資料 */
  static async deleteUserCartCoupon(req: IRequestJwtBody, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "使用者 移除購物車 - 優惠卷資料"
     * #swagger.security = [
          {
            "apiKeyAuth": []
          }
        ]
     * #swagger.responses[200] = {
          description: "刪除成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "刪除成功"
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
      const user = req.user;

      if (!user) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.deleteUserCartCouponAsync(user._id);

      if (result === false)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.DeleteFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.DeleteSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion deleteUserCartCoupon [ 使用者 移除購物車 - 優惠卷資料 ]

  //#region getUserCart [ 使用者 讀取購物車資料 ]
  /** 使用者 讀取購物車資料 */
  static async getUserCart(req: IRequestJwtBody, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "使用者 讀取購物車資料"
     * #swagger.security = [
          {
            "apiKeyAuth": []
          }
        ]
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "成功",
            "data": {
              "totalPrice": 7022,
              "shoppingCart": [
                {
                  "_id": "6482b94965829859fd1d1838",
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
              "courseIds": [
                "6482b94965829859fd1d1838"
              ],
              "discountedPrice": 6210,
              "couponCode": "bvCyXjGL",
              "couponPrice": 812,
              "youMightLike": [
                {
                  "_id": "646f7e2f4802a2dbf6b3ebcd",
                  "title": "寵物洗澡的基本知識與技巧",
                  "cover": "https://thumbs.dreamstime.com/z/cat-dog-under-christmas-tree-pets-plaid-105463936.jpg",
                  "level": "初階課程",
                  "time": 48.6,
                  "total": 26,
                  "instructorName": "ffffff",
                  "price": 7907,
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
            "message": "系統發生錯誤，請聯繫系統管理員"
          }
        }
    */
    //#endregion [ swagger說明文件 ]
    try {
      const user = req.user;

      if (!user) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const currentDate = new Date();
      const goldFlowService = new GoldFlowService();
      const shoppingCart = await goldFlowService.getUserCartAsync(user._id, currentDate);

      if (!shoppingCart) return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);

      const youMightLike = await goldFlowService.getYouMightLike(currentDate);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
        ...shoppingCart,
        youMightLike,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion getUserCart [ 使用者 讀取購物車資料 ]

  //#region postVisitorsCart [ 訪客 讀取購物車資料 ]
  /** 訪客 讀取購物車資料 */
  static async postVisitorsCart(
    req: IRequestBody<IPostCartRequest>,
    res: Response,
    next: NextFunction,
  ) {
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
              "6482b95a65829859fd1d1a74",
              "6482b94865829859fd1d16dd",
              "6482b94965829859fd1d185e"
            ],
            "couponCode": "YaN9gxlr"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "成功",
            "data": {
              "totalPrice": 7022,
              "shoppingCart": [
                {
                  "_id": "6482b94965829859fd1d1838",
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
              "courseIds": [
                "6482b94965829859fd1d1838"
              ],
              "discountedPrice": 6210,
              "couponCode": "bvCyXjGL",
              "couponPrice": 812,
              "youMightLike": [
                {
                  "_id": "646f7e2f4802a2dbf6b3ebcd",
                  "title": "寵物洗澡的基本知識與技巧",
                  "cover": "https://thumbs.dreamstime.com/z/cat-dog-under-christmas-tree-pets-plaid-105463936.jpg",
                  "level": "初階課程",
                  "time": 48.6,
                  "total": 26,
                  "instructorName": "ffffff",
                  "price": 7907,
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
            "message": "系統發生錯誤，請聯繫系統管理員"
          }
        }
    */
    //#endregion [ swagger說明文件 ]
    try {
      const { courseIds, couponCode } = req.body;

      const currentDate = new Date();
      const goldFlowService = new GoldFlowService();

      if (!courseIds) return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);

      const courseHierarchy = await goldFlowService.getCartAsync(
        courseIds,
        couponCode,
        currentDate,
      );

      if (!courseHierarchy) return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);

      const youMightLike = await goldFlowService.getYouMightLike(currentDate);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
        ...courseHierarchy,
        youMightLike,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion postVisitorsCart [ 訪客 讀取購物車資料 ]

  //#region getValidCoupon [ 讀取有效優惠卷 ]
  /** 讀取有效優惠卷 */
  static async getValidCoupon(_req: IRequestBody, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "讀取有效優惠卷"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "coupons": [
                {
                  "tagNames": [
                    "貓咪行為訓練",
                    "寵物零食手作"
                  ],
                  "couponCode": "MD4kEFNL",
                  "price": 143,
                  "startDate": "2023-05-23T11:02:05.034Z",
                  "endDate": "2023-08-09T03:41:28.189Z"
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
            "message": "系統發生錯誤，請聯繫系統管理員"
          }
        }
    */
    //#endregion [ swagger說明文件 ]
    try {
      const goldFlowService = new GoldFlowService();
      const coupons = await goldFlowService.getValidCouponAsync();

      if (coupons.length === 0)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, { coupons });
    } catch (err) {
      next(err);
    }
  }
  //#endregion getValidCoupon [ 讀取有效優惠卷 ]

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
              "6482b94965829859fd1d1838",
              "646f7e2f4802a2dbf6b3eb84",
              "646f7e2f4802a2dbf6b3eb85"
            ],
            "couponCode": "bvCyXjGL"
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
              "itemDesc": "6482b94965829859fd1d1838,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
              "totalPrice": 7022,
              "shoppingCart": [
                {
                  "_id": "6482b94965829859fd1d1838",
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
              "couponPrice": 812,
              "timeStamp": 1685801564,
              "merchantOrderNo": "da0fc2143dc2b6ca599416e07077db85b75f1800845663b969543fecd4598b43"
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
      const courseHierarchy = await goldFlowService.checkOrderCoursesAsync(courseIds);

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      // const timeStamp = Math.round(new Date().getTime() / 1000);
      // const orderId = new Types.ObjectId().toString();

      // const orderIdAesEncrypt = goldFlowService.orderIdAesEncrypt(
      //   orderId,
      //   orderHasKey,
      //   orderHasIv,
      //   orderSalt,
      //   orderalgorithm,
      // );

      // const order = await goldFlowService.createOrderAsync(courseHierarchy, couponCode);

      // order.timeStamp = timeStamp;
      // order.merchantOrderNo = orderIdAesEncrypt;

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);
    } catch (err) {
      next(err);
    }
  }
  //#endregion createOrder [ 新增訂單 ]

  //#region postCheckOrder [ 讀取確認訂單資料 ]
  /** 讀取確認訂單資料 */
  static async postCheckOrder(
    req: IRequestJwtBody<IPostCheckRequest>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "讀取確認訂單資料"
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
            "amt": 6210,
            "itemDesc": "6482b94965829859fd1d1838,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
            "timeStamp": 1685802800,
            "merchantOrderNo": "ef59949668ed65c41864ea71f75050562f58f1f372b2e49fdc5b9e7d65274894"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "merchantId": "MS148918186",
              "version": "1.5",
              "amt": 6210,
              "email": "Abc1231@gmail.com",
              "timeStamp": 1685802800,
              "merchantOrderNo": "647b4f2f41fda7e8d1f78253",
              "itemDesc": "6482b94965829859fd1d1838,646f7e2f4802a2dbf6b3eb84,646f7e2f4802a2dbf6b3eb85",
              "aesEncrypted": "b4b3ec4a74bcbe88533ab5f0a554e57dfaaec301317e0d366e39d191d825d786ffcb1f8de6698b361a9069dcd2cea6ad7d89182aef5d12aa625ffbef1e47f6e05157613038cc5437d505aa8e6c9c1c50cbe57a61c51698d43fa32367b1bd4d3b9da0ee2d4df5f35e087cd62d3cf870dd55f4c24fba5391c90dfc7f620f19c680c0e7bdc1ce85fff671232dba401ef2bad292ae5ba31cc024f3738452fedadaf165f4363d9d3b9d3100900402c8c469e824fe341b520390ab88e5c8b68078ae8a6780dd260c7f98c1ab464f3c1f46f157a11b064bd661c72dfd41604506de7e9c7fdc6602b42cf8eaa9f1f8a3021ff2c3",
              "shaEncrypted": "8189C432B9F7BA618F65E246FB5C4E3B09380067C23AD0B8FBD8AC1E999138D3"
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

      const { amt, itemDesc, timeStamp, merchantOrderNo } = req.body;

      const goldFlowService = new GoldFlowService();

      const _merchantOrderNo = goldFlowService.orderIdAesDecrypt(
        merchantOrderNo,
        orderHasKey,
        orderHasIv,
        orderSalt,
        orderalgorithm,
      );

      const isValidId = isValidObjectId(_merchantOrderNo);

      if (!isValidId) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const order: IOrder = {
        amt: amt,
        email: user.email,
        timeStamp: timeStamp,
        merchantOrderNo: _merchantOrderNo,
        itemDesc: itemDesc,
      };

      const aesEncrypted = goldFlowService.createMpgAesEncrypt(
        order,
        goldFlowHashKey,
        goldFlowHashIv,
        goldFlowalgorithm,
      );

      const shaEncrypted = goldFlowService.createMpgShaEncrypt(
        aesEncrypted,
        goldFlowHashKey,
        goldFlowHashIv,
      );

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, {
        merchantId,
        version,
        ...order,
        aesEncrypted,
        shaEncrypted,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCheckOrder [ 讀取確認訂單資料 ]
}

export { GoldFlowController };
