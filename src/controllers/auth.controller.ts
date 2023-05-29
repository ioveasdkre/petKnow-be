import { Response, NextFunction } from 'express';
import { User } from '../connections/mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IUpdateUserRequest } from '../viewModels/controllers/auth.viewMdel';
import { IVerifyJwtTokenRequest as IRequestBody } from '../viewModels/middlewares/verifyType.viewModel';

class authController {
  //#region UserExists [ 查詢用戶是否存在 ]
  /** 查詢用戶是否存在 */
  static async UserExists(req: IRequestBody, res: Response, next: NextFunction) {
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
      const user = req.user;

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, user);
    } catch (err) {
      next(err);
    }
  }
  //#endregion UserExists [ 查詢用戶是否存在 ]

  //#region updateUser [ 更新用戶資料 ]
  /** 更新用戶資料 */
  static async updateUser(req: IRequestBody<IUpdateUserRequest>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
    * #swagger.tags = ["登入系統 API"]
    * #swagger.description = "註冊帳號"
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
          "name": "patrick",
          "bio": "Just another software developer",
          "nickname": "pat"
        }
      }
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
      const claims = req.user;

      if (!claims)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      const filter = { _id: claims._id };
      const { email, ...update } = req.body;
      const user = await User.findOneAndUpdate(filter, update, { returnOriginal: false });

      if (!user) {
        return handleResponse(res, HttpStatusCode.BadRequest, '找不到用戶');
      }

      const { password, ...data } = await user.toJSON();

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.ModifySuccess, data);
    } catch (err) {
      next(err);
    }
  }
  //#endregion updateUser [ 更新用戶資料 ]}
}

export { authController };
