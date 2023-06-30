import { Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { BackstageService } from '../services/backstage.service';
import { IRequestJwtBody } from '../viewModels/middlewares/verifyType.viewModel';

class BackstageController {
  //#region getMyClassroom [ 使用者 後台 - 我的課堂 ]
  /** 使用者 後台 - 我的課堂 */
  static async getMyClassroom(
    req: IRequestJwtBody,
    res: Response,
    next: NextFunction,
  ) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Backstage - 後台 API"]
     * #swagger.description = "使用者 後台 - 我的課堂"
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
            "message": "查詢成功"
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

      const backstageService = new BackstageService();
      const result = await backstageService.getMyClassroomAsync(user._id);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getMyClassroom [ 使用者 後台 - 我的課堂 ]
}

export { BackstageController };
