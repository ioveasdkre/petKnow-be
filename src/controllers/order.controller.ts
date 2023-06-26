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
                "_id": "6498f00f8f3dfbb1e9b842ca",
                "user": "6485bc644f8b667f792915a0",
                "merchantOrderNo": "4bdce725ae324d9985f91687744528",
                "tradeSha": "733D398860DB2C5E95D915C1ABE1D5A2C4AD753953FB8DCB709AB98229E6BC97",
                "tradeInfo": "b4b3ec4a74bcbe88533ab5f0a554e57dfaaec301317e0d366e39d191d825d786ffcb1f8de6698b361a9069dcd2cea6ad0cb395b214736ab8b7f375800c2d635266882173d1ba8ded78ee545c8ebb62c5416c8c06cb4c0dbcc938d3101d11fbdeb1f3fba303001e9b083d1c60702118f01cabed799a593c10bc818e5c78c455d326963e86f863055e2511eb716453a790773615c4b72a511121edf97226553cfb5b717189cc879d1bf5b272fa36673895",
                "merchantID": "MS148918186",
                "version": 1.5,
                "amt": 539,
                "itemDesc": "1",
                "email": "Abc1231@gmail.com",
                "timeStamp": 1687744528,
                "isPayment": false,
                "createdAt": "2023-06-26T01:55:27.571Z",
                "updatedAt": "2023-06-26T01:55:27.571Z"
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
            "message": "查詢成功",
            "data": {
              "_id": "6498f4304a003ff8a09f6ee3",
              "user": "6485bc644f8b667f792915a0",
              "merchantOrderNo": "db10418b113f4452a70e1687745584",
              "tradeSha": "88C4A692A80A962CCE63587328DCA2B63CBF1790256FB542ED85E2DE884841DF",
              "tradeInfo": "b4b3ec4a74bcbe88533ab5f0a554e57dfaaec301317e0d366e39d191d825d786ffcb1f8de6698b361a9069dcd2cea6ad2827ac2c63616c1edc28239c9804d7742189530fb5e900ca584d1d012b78d0f64d84968e9edca2cb0ee879af2eac497d2f47bc635d10d04fc21dee3b9d2b090056849a24f0fb95f4abeac7aa0f016ca5147b6cc737190293363186288ce62864a8394b2b6947ef076a8138b3e7203b4a12163d5c8f5443db6781a2b944083de5",
              "merchantID": "MS148918186",
              "version": 1.5,
              "amt": 539,
              "itemDesc": "1",
              "email": "Abc1231@gmail.com",
              "timeStamp": 1687745584,
              "isPayment": false,
              "createdAt": "2023-06-26T02:13:04.233Z",
              "updatedAt": "2023-06-26T02:13:04.233Z"
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

      if (!result)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getOrder [ 讀取一筆訂單資料 ]

  //#region putOrder [ 更新一筆訂單資料 ]
  /** 更新一筆訂單資料 */
  static async putOrder(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Order - 訂單資料表 API"]
     * #swagger.description = "更新一筆訂單資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "更新成功",
            "data": {
              "_id": "6498f4304a003ff8a09f6ee3",
              "user": "6485bc644f8b667f792915a0",
              "merchantOrderNo": "db10418b113f4452a70e1687745584",
              "tradeSha": "88C4A692A80A962CCE63587328DCA2B63CBF1790256FB542ED85E2DE884841DF",
              "tradeInfo": "b4b3ec4a74bcbe88533ab5f0a554e57dfaaec301317e0d366e39d191d825d786ffcb1f8de6698b361a9069dcd2cea6ad2827ac2c63616c1edc28239c9804d7742189530fb5e900ca584d1d012b78d0f64d84968e9edca2cb0ee879af2eac497d2f47bc635d10d04fc21dee3b9d2b090056849a24f0fb95f4abeac7aa0f016ca5147b6cc737190293363186288ce62864a8394b2b6947ef076a8138b3e7203b4a12163d5c8f5443db6781a2b944083de5",
              "merchantID": "MS148918186",
              "version": 1.5,
              "amt": 539,
              "itemDesc": "1",
              "email": "Abc1231@gmail.com",
              "timeStamp": 1687745584,
              "isPayment": false,
              "createdAt": "2023-06-26T02:13:04.233Z",
              "updatedAt": "2023-06-26T02:13:04.233Z"
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
      const result = await _CRUDService.update(orderId, {
        isPayment: true,
        updatedAt: new Date(),
      });

      if (!result)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion putOrder [ 更新一筆訂單資料 ]

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
