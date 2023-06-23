import { Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { GoldFlowService } from '../services/goldFlow.service';
import { IRequestBody } from '../types/handle.type';
import { isValidObjectId } from '../utils/mongoose.util';
import {
  ISaveOrUpdateUserCartCourse,
  IUpdateUserCartCourse,
  ISaveOrUpdateUserCartCoupon,
  IPostCartRequest,
  IPostCheckRequest,
  IPostNotify,
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
      const youMightLike = await goldFlowService.getYouMightLike(currentDate);

      if (!shoppingCart)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
          shoppingCart: [],
          youMightLike,
        });

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
      const youMightLike = await goldFlowService.getYouMightLike(currentDate);

      if (courseIds.length === 0)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, {
          shoppingCart: [],
          youMightLike,
        });

      const courseHierarchy = await goldFlowService.getCartAsync(
        courseIds,
        couponCode,
        currentDate,
      );

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, {
          shoppingCart: [],
          youMightLike,
        });

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, {
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
  static async createOrder(req: IRequestJwtBody, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "新增訂單"
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
            "message": "新增成功",
            "data": {
              "_id": "8409b223943367ba2b13484e2b71b3a39aa931f95012d41b4c6da3249bfa5e66",
              "totalPrice": 25922,
              "shoppingCart": [
                {
                  "_id": "6485ccabb62613a5e824e4dd",
                  "title": "健康狗狗的飼養指南",
                  "cover": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  "level": "中階課程",
                  "time": 20.5,
                  "total": 75,
                  "instructorName": "林耀恒",
                  "price": 4618,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "discountedPrice": 25321
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

      if (!user)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.InvalidCredentials);

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.orderProcessingAsync(user._id, user.email);

      if (result === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      else if (result === 1)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess, result);
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
            "_id": "8409b223943367ba2b13484e2b71b3a39aa931f95012d41b4c6da3249bfa5e66"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "_id": "648ebbf9b3b4705f1f48e1ff",
              "merchantOrderNo": "affa2b5a2bd3440b9e2c1687075834",
              "tradeSha": "1119920853A0A364AD9F0E0A2C9C42201A76C06A14EA97B86A4B15167FCC3968",
              "tradeInfo": "b4b3ec4a74bcbe88533ab5f0a554e57dfaaec301317e0d366e39d191d825d786ffcb1f8de6698b361a9069dcd2cea6ad774cbbaa494a19958873201a1af9bfc599373915f9c2928d76695b710b9959cc13ae9642755aa5e05c7abbf00c9bc21fab30b787938de8f9f8f5c4fb1368b7a388dd22c9778c37238f5e7b979e015cdbf6216598b359eafb93658701860a354fc313b2cc56450668e4d3dc9d7559e4d4434aa7b389f106c4d9f79428c8ca0601",
              "merchantID": "MS148918186",
              "version": 1.5,
              "amt": 25321,
              "itemDesc": "6",
              "email": "Abc1231@gmail.com",
              "timeStamp": 1687075834
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
      const { _id } = req.body;

      if (!user) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      else if (!_id) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.postCheckOrderAsync(user._id, _id);

      if (result === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      else if (result === 1)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCheckOrder [ 讀取確認訂單資料 ]

  //#region postNotify [ 結帳完成 ]
  /** 結帳完成 */
  static async postNotify(req: IRequestBody<IPostNotify>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "結帳完成"
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
            "TradeInfo": "8409b223943367ba2b13484e2b71b3a39aa931f95012d41b4c6da3249bfa5e66"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "成功",
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
      const { TradeInfo } = req.body;

      const goldFlowService = new GoldFlowService();
      const result = await goldFlowService.postNotifyAsync(TradeInfo);

      if (result === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      else if (result === 1) return handleResponse(res, HttpStatusCode.BadRequest, '結帳完成失敗');
      else if (result === 2)
        return handleResponse(res, HttpStatusCode.BadRequest, '刪除購物車資料失敗');

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);
    } catch (err) {
      next(err);
    }
  }
  //#endregion postNotify [ 結帳完成 ]
}

export { GoldFlowController };
