import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { HomeService } from '../services/home.service';
import { IReqQuery } from '../types/handle.type';
import { IGetSearchRequest } from '../viewModels/controllers/home.viewModel';

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
            "message": "查詢成功",
            "data": {
              "carousel": [
                {
                  "_id": "6482b94965829859fd1d1838",
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
      const { carousel, popular, tagNames } = await homeService.getIndexAsync();

      if (!carousel || popular.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, {
        ...carousel,
        popular,
        tagNames,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion getIndex [ 首頁 ]

  //#region getSearch [ 搜尋關鍵字 ]
  /** 搜尋關鍵字 */
  static async getSearch(req: IReqQuery<IGetSearchRequest>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Home - 基本 API"]
     * #swagger.description = "搜尋關鍵字"
     * #swagger.parameters['q'] = {
          in: 'query',
          description: '關鍵字',
          required: true,
          type: 'string',
          default: '狗狗'
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "courses": [
                {
                  "_id": "646f7e2f4802a2dbf6b3eb89",
                  "title": "高效狗狗訓練課程",
                  "shortDescription": "這堂課將教您如何照顧狗狗的健康和護理需求。我們將探討常見的健康問題預防、疫苗接種和定期檢查的重要性，以確保您的狗狗保持健康和快樂。",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "level": "所有級別",
                  "time": 139.1,
                  "total": 59,
                  "instructorName": "zihyin",
                  "price": 6189,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "comboPack": {
                "totalPrice": 10694,
                "courses": [
                  {
                    "_id": "646f7e2f4802a2dbf6b3eb91",
                    "title": "狗狗養育指南",
                    "shortDescription": "<p>尿布訓練是狗狗的基礎訓練之一，它可以幫助您的狗狗建立適當的排泄習慣。</p>\n<ul>\n  <li>選擇適合的尿布訓練方法：包括使用尿布墊片、尿布盆等不同方式。</li>\n  <li>建立排泄地點：訓練狗狗在指定的區域內進行排泄。</li>\n  <li>正確回饋和糾正方法：適時給予獎勵和糾正以加強尿布訓練效果。</li>\n</ul>\n<p>透過尿布訓練，您的狗狗將學會在指定的地點排泄，減少室內意外，並建立良好的衛生習慣。</p>",
                    "cover": "https://thumbs.dreamstime.com/z/dog-jumping-over-pool-water-29720697.jpg",
                    "level": "所有級別",
                    "time": 55.2,
                    "total": 42,
                    "instructorName": "Benson",
                    "price": 7546,
                    "discountPrice": null,
                    "isFree": false
                  }
                ]
              },
              "courseCards": {
                "courses": [
                  {
                    "_id": "646f7e2f4802a2dbf6b3eb96",
                    "title": "狗狗的健康管理",
                    "cover": "https://thumbs.dreamstime.com/z/dog-love-rose-valentines-jack-russell-sticking-out-tongue-lying-bed-full-petals-as-background-day-wearing-78523443.jpg",
                    "level": "初階課程",
                    "time": 158.4,
                    "total": 86,
                    "instructorName": "RUBYTEST",
                    "price": 7508,
                    "discountPrice": 7299,
                    "isFree": false
                  }
                ]
              },
              "tagNames": [
                "狗狗解悶遊戲"
              ]
            }
          }
        }
     *  #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
            "message": "錯誤的請求"
          }
        }
     *  #swagger.responses[500] = {
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
      const { q } = req.query;

      const homeService = new HomeService();
      const courses = await homeService.getSearchCoursesAsync(q);
      const tagNames = courses.uniqueTagNames;

      if (!courses || !tagNames)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      delete courses.uniqueTagNames;

      const { comboPack, courseCards } = await homeService.getSearchComboPackAsync(tagNames);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, {
        ...courses,
        comboPack,
        courseCards,
        tagNames,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion getSearch [ 搜尋關鍵字 ]

  //#region getVisitorCourseDetails [ 訪客 課程介紹 ]
  /** 訪客 課程介紹 */
  static async getVisitorCourseDetails(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["Home - 基本 API"]
     * #swagger.description = "訪客 課程介紹"
     * #swagger.responses[200] = {
          description: "查詢成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": {
              "course": {
                "name": "曾詩涵",
                "courseIntroduction": "<p>尿布訓練是狗狗的基礎訓練之一，它可以幫助您的狗狗建立適當的排泄習慣。</p>\n<ul>\n  <li>選擇適合的尿布訓練方法：包括使用尿布墊片、尿布盆等不同方式。</li>\n  <li>建立排泄地點：訓練狗狗在指定的區域內進行排泄。</li>\n  <li>正確回饋和糾正方法：適時給予獎勵和糾正以加強尿布訓練效果。</li>\n</ul>\n<p>透過尿布訓練，您的狗狗將學會在指定的地點排泄，減少室內意外，並建立良好的衛生習慣。</p>",
                "instructors": "<div>\n  <h3>講師：Sarah Thompson</h3>\n  <p>Sarah Thompson 是一位專注於狗狗基本指令訓練的專家。她以其溫和且有效的訓練方法聞名，並且擁有協助許多狗狗主人建立良好關係的豐富經驗。</p>\n  <p>在這堂課中，Sarah將教導您如何訓練狗狗基本的指令，並與您分享培養狗狗良好行為的技巧。她將提供個人化的建議，幫助您解決訓練中的困惑和挑戰。</p>\n</div>",
                "title": "狗狗健康檢查技巧指南",
                "shelfDate": "2023-02-12T02:24:53.237Z",
                "chapters": [
                  {
                    "_id": "E003000",
                    "sequence": 1,
                    "title": "外觀與行為觀察",
                    "time": 334,
                    "total": 0,
                    "subchapters": [
                      {
                        "_id": "E0030000",
                        "sequence": 1,
                        "title": "毛髮與皮膚檢查",
                        "time": 60,
                        "fileName": "32436181"
                      }
                    ]
                  }
                ]
              },
              "lecturerRelatedCourses": [
                {
                  "_id": "6493d9bf127ca634f0eeab5c",
                  "cover": "https://images.unsplash.com/photo-1574063413132-354db9f190fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
              ]
            }
          }
        }
     *  #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
            "message": "錯誤的請求"
          }
        }
     *  #swagger.responses[500] = {
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
      const courseId = req.params.courseId;

      const homeService = new HomeService();
      const result = await homeService.getVisitorCourseDetailsAsync(courseId);

      if (result === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getVisitorCourseDetails [ 訪客 課程介紹 ]
}

export { HomeController };
