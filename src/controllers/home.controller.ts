import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { HomeService } from '../services/home.service';

class HomeController {
  //#region getIndex [ 首頁 ]
  /** 首頁 */
  static async getIndex(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Home - 基本 API"]
     * #swagger.description = "首頁"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢失敗",
            "data": {
              "carousel": [
                {
                  "_id": "646f7e2f4802a2dbf6b3eb83",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "instructorName": "RubyTest"
                }
              ],
              "popular": [
                {
                  "tag": "寵物溝通",
                  "courses": [
                    {
                      "_id": "646f7e2f4802a2dbf6b3ebbd",
                      "title": "建立與你的寵物更深層的連結",
                      "cover": "https://thumbs.dreamstime.com/z/cat-dog-love-2025305.jpg",
                      "instructorName": "Benson",
                      "price": 3688,
                      "discountPrice": null,
                      "isFree": false
                    }
                  ]
                }
              ],
              "tagNames": [
                "寵物溝通"
              ]
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
      const homeService = new HomeService();
      const { carousel, popular, tagNames } = await homeService.getIndex();

      if (!carousel || popular.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveFailure, {
        ...carousel,
        popular,
        tagNames,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion getIndex [ 首頁 ]
}

export { HomeController };
