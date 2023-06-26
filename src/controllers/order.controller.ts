import { Request, Response, NextFunction } from 'express';
import { Order } from '../connections/mongoDB';
import { IOrder, IOrderModel } from '../models/order.model';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { CRUDService } from '../services/shares/crud.service';

class OrderController {
  //#region getOrders [ 讀取訂單資料表所有資料 ]
  /** 讀取訂單資料表所有資料 */
  static async getOrders(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Order - 訂單資料表 API"]
     * #swagger.description = "讀取訂單資料表所有資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": [
              {
                "_id": "647d509a14f1d0f929617f93",
                "user": "6475494ecc27da782677290f",
                "courses": [
                  "6482b94965829859fd1d1838",
                  "646f7e2f4802a2dbf6b3eb84",
                  "646f7e2f4802a2dbf6b3eb85"
                ],
                "createdAt": "2023-06-05T03:02:46.521Z",
                "updatedAt": "2023-06-05T03:02:46.521Z"
              }
            ]
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
      const _CRUDService = new CRUDService<IOrderModel>(Order);
      const result: IOrder[] = await _CRUDService.getAll();

      if (result.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getOrders [ 讀取訂單資料表所有資料 ]

  //#region getOrder [ 讀取一筆訂單資料 ]
  /** 讀取一筆訂單資料 */
  static async getOrder(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Order - 訂單資料表 API"]
     * #swagger.description = "讀取一筆訂單資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "新增成功",
            "data": {
              "user": "6475494ecc27da782677290f",
              "courses": [
                "6482b94965829859fd1d1838",
                "646f7e2f4802a2dbf6b3eb84",
                "646f7e2f4802a2dbf6b3eb85"
              ],
              "createdAt": "2023-06-05T03:07:37.811Z",
              "updatedAt": "2023-06-05T03:07:37.811Z",
              "_id": "647d519e664f577d916827dd"
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
      const orderId = req.params.orderId;

      const _CRUDService = new CRUDService<IOrderModel>(Order);
      const result = await _CRUDService.getById(orderId);

      if (!result) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getOrder [ 讀取一筆訂單資料 ]

  //#region deleteOrders [ 刪除訂單資料表全部資料 ]
  /** 刪除訂單資料表全部資料 */
  static async deleteOrders(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Order - 訂單資料表 API"]
     * #swagger.description = "刪除訂單資料表全部資料"
     * #swagger.responses[200] = {
          description: "刪除成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "刪除成功"
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
      await Order.deleteMany();

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.DeleteSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion deleteOrders [ 刪除訂單資料表全部資料 ]
}

export { OrderController };
