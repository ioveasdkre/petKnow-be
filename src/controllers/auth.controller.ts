import { Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IRequestBody } from '../types/handle.type';
import { IUserExistsRequest } from '../vmodels/controllers/auth.vmdel';

class authController {
  //#region UserExists [ 查詢用戶是否存在 ]
  /** 查詢用戶是否存在 */
  static async UserExists(
    req: IRequestBody<IUserExistsRequest>,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
   * #swagger.tags = ["登入系統 API"]
   * #swagger.description = "註冊帳號"
   * #swagger.security = [
        {
          "apiKeyAuth": []
        }
      ]
    * #swagger.responses[200] = {
        description: "成功",
        schema: {
          "success": true,
          "statusCode": 200,
          "message": "Success",
          "data": {
            "_id": "646d8bf85f52ae9681b88593",
            "name": "Benson",
            "email": "Abc123#@gmail.com",
            "password": "$2a$10$1yR.UPzTukYyVdiLUTHvhugqp1nBEjZmKD31inX2XGlLpUIGvAwly",
            "__v": 0
          }
        }
      }
    * #swagger.responses[400] = {
        description: "錯誤的請求",
        schema:{
          "success": false,
          "statusCode": 400,
          "message": "Unauthenticated or user not found",
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
      const { user } = req.body;

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, user);
    } catch (err) {
      next(err);
    }
  }
  //#endregion UserExists [ 查詢用戶是否存在 ]
}

export { authController };
