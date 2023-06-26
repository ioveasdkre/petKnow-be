import { Request, Response, NextFunction } from 'express';
import { ShoppingCart } from '../connections/mongoDB';
import { IShoppingCart, IShoppingCartModel } from '../models/shoppingCart.model';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { CRUDService } from '../services/shares/crud.service';
import { IPostShoppingCart } from '../viewModels/controllers/shoppingCart.viewModel';
import { IRequestJwtBody } from '../viewModels/middlewares/verifyType.viewModel';

class ShoppingCartController {
  //#region getShoppingCarts [ 讀取購物車資料表所有資料 ]
  /** 讀取購物車資料表所有資料 */
  static async getShoppingCarts(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["ShoppingCart - 購物車資料表 API"]
     * #swagger.description = "讀取購物車資料表所有資料"
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
      const _CRUDService = new CRUDService<IShoppingCartModel>(ShoppingCart);
      const result: IShoppingCart[] = await _CRUDService.getAll();

      if (result.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getShoppingCarts [ 讀取購物車資料表所有資料 ]

  //#region postShoppingCart [ 新增一筆購物車資料 ]
  /** 新增一筆購物車資料 */
  static async postShoppingCart(
    req: IRequestJwtBody<IPostShoppingCart>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["ShoppingCart - 購物車資料表 API"]
     * #swagger.description = "新增一筆購物車資料"
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
            "courses": [
              "6482b94965829859fd1d1838",
              "646f7e2f4802a2dbf6b3eb84",
              "646f7e2f4802a2dbf6b3eb85"
            ]
          }
        }
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
      const user = req.user;

      if (!user) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const { courses } = req.body;

      if (!courses || courses.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const shoppingCart = {
        user: user._id,
        courses,
      };

      const _CRUDService = new CRUDService<IShoppingCartModel>(ShoppingCart);
      const result = await _CRUDService.create(shoppingCart);

      if (!result) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion postShoppingCart [ 新增一筆購物車資料 ]

  //#region deleteShoppingCarts [ 刪除所有資料 ]
  /** 刪除所有資料 */
  static async deleteShoppingCarts(
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["ShoppingCart - 購物車資料表 API"]
     * #swagger.description = "刪除所有資料"
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
      await ShoppingCart.deleteMany();

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.DeleteSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion deleteShoppingCarts [ 刪除所有資料 ]
}

export { ShoppingCartController };
