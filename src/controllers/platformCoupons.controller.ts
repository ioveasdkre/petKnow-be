import { Request, Response, NextFunction } from 'express';
import { PlatformCoupons } from '../connections/mongoDB';
import { IPlatformCoupons, IPlatformCouponsModel } from '../models/platformCoupons.model';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { CRUDService } from '../services/shares/crud.service';

class PlatformCouponsController {
  //#region getAllPlatformCoupons [ 取得全部優惠卷資料 ]
  /** 取得全部優惠卷資料 */
  static async getAllPlatformCoupons(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["PlatformCoupons - 平台優惠卷表 API"]
     * #swagger.description = "取得全部優惠卷資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "成功",
            "data": [
              {
                "_id": "6482ba8d36468e1a1f14970f",
                "tagNames": [
                  "貓咪行為訓練"
                ],
                "couponCode": "MD4kEFNL",
                "price": 143,
                "isEnabled": true,
                "startDate": "2023-05-23T11:02:05.034Z",
                "endDate": "2023-08-09T03:41:28.189Z",
                "createdAt": "2022-09-02T00:15:09.935Z",
                "updatedAt": "2024-05-30T03:14:55.042Z"
              }
            ]
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "statusCode": 400,
            "isSuccess": false,
            "message": "Failure"
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
      const _CRUDService = new CRUDService<IPlatformCouponsModel>(PlatformCoupons);
      const result: IPlatformCoupons[] = await _CRUDService.getAll();

      if (result.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllPlatformCoupons [ 取得全部優惠卷資料 ]

  //#region getPlatformCoupon [ 查詢一筆平台優惠卷資料 ]
  /** 查詢一筆平台優惠卷資料 */
  static async getPlatformCoupon(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["PlatformCoupons - 平台優惠卷表 API"]
     * #swagger.description = "查詢一筆平台優惠卷資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "_id": "6482ba8d36468e1a1f14970f",
              "tagNames": [
                "貓咪行為訓練"
              ],
              "couponCode": "MD4kEFNL",
              "price": 143,
              "isEnabled": true,
              "startDate": "2023-05-23T11:02:05.034Z",
              "endDate": "2023-08-09T03:41:28.189Z",
              "createdAt": "2022-09-02T00:15:09.935Z",
              "updatedAt": "2024-05-30T03:14:55.042Z"
            }
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
            "message": "錯誤的請求"
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
      const platformCouponId = req.params.platformCouponId;

      if (!platformCouponId)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const _CRUDService = new CRUDService<IPlatformCouponsModel>(PlatformCoupons);
      const result = await _CRUDService.getById(platformCouponId);

      if (!result)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getPlatformCoupon [ 查詢一筆平台優惠卷資料 ]

  //#region putPlatformCoupon [ 更新一筆平台優惠卷資料 ]
  /** 更新一筆平台優惠卷資料 */
  static async putPlatformCoupon(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["PlatformCoupons - 平台優惠卷表 API"]
     * #swagger.description = "更新一筆平台優惠卷資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "_id": "6482ba8d36468e1a1f149712",
              "tagNames": [
                "狗狗的飲食習慣"
              ],
              "couponCode": "bvCyXjGL",
              "price": 601,
              "isEnabled": true,
              "startDate": "2023-01-24T14:30:25.182Z",
              "endDate": "2023-07-30T08:39:18.789Z",
              "createdAt": "2022-12-28T10:52:29.714Z",
              "updatedAt": "2023-08-01T02:40:37.914Z"
            }
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
            "message": "錯誤的請求"
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
      const platformCouponId = req.params.platformCouponId;

      if (!platformCouponId)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      let currentDate = new Date();

      currentDate.setDate(currentDate.getDate() + 30);
      const _CRUDService = new CRUDService<IPlatformCouponsModel>(PlatformCoupons);
      const result = await _CRUDService.update(platformCouponId, { endDate: currentDate });

      if (!result)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion putPlatformCoupon [ 更新一筆平台優惠卷資料 ]
}

export { PlatformCouponsController };
