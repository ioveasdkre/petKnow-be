import { Request, Response, NextFunction } from 'express';
import { CourseHierarchy, PlatformCoupons, User } from '../connections/mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { FakeInformationService } from '../services/fakeInformation.service';

class FakeInformationController {
  //#region getAllUser [ 取得全部使用者資料 ]
  /** 取得全部使用者資料 */
  static async getAllUserId(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "取得全部使用者資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": [
              "6462f6e51d25094b3e5b94ca"
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
      const Users = await User.find();

      if (Users.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, Users);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllUser [ 取得全部使用者資料 ]

  //#region getAllCourseHierarchys [ 取得全部課程彙總資料 ]
  /** 取得全部課程彙總資料 */
  static async getAllCourseHierarchys(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "取得全部課程彙總資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": [
              {
                "_id": "6482b94965829859fd1d1838",
                "user": "646b7386c4f79ea9d11ff6e7",
                "tagNames": [
                  "狗狗訓練"
                ],
                "cover": "z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                "promoVideo": null,
                "title": "狗狗訓練入門課程",
                "shortDescription": "這堂課將教您如何照顧狗狗的健康和護理需求。我們將探討常見的健康問題預防、疫苗接種和定期檢查的重要性，以確保您的狗狗保持健康和快樂。",
                "description": "<p>在這堂課中，我們將介紹狗狗的基本養育需求，幫助您了解如何照顧一隻健康快樂的狗狗。</p>\n<ul>\n  <li>狗狗的飲食需求：選擇適合的狗糧種類和餵食方式。</li>\n  <li>適合的住所環境：提供舒適的睡覺空間和適合運動的戶外區域。</li>\n  <li>定期醫療護理：疫苗接種、定期驅蟲和常見疾病預防。</li>\n  <li>適度的運動和遊戲：維持狗狗的身體健康和心理活躍。</li>\n</ul>\n<p>透過這些基本養育需求的認識，您將能夠提供一個健康快樂的生活環境給您的狗狗。</p>",
                "level": 1,
                "price": 3148,
                "enrollmentCount": 8152,
                "totalTime": 488188,
                "totalNumber": 53,
                "isFree": false,
                "isPopular": true,
                "isPublished": true,
                "discountDate": null,
                "shelfDate": "2023-05-27T03:18:13.292Z",
                "createdAt": "2022-01-14T01:16:25.892Z",
                "updatedAt": "2023-01-26T09:36:33.068Z",
                "chapters": [
                  {
                    "_id": "A00000",
                    "sequence": 1,
                    "title": "基礎知識",
                    "totalTime": 154315,
                    "totalNumber": 42,
                    "subchapters": [
                      {
                        "_id": "A000000",
                        "sequence": 1,
                        "title": "犬種介紹",
                        "content": null,
                        "fileName": "807306477?h=c67a24399e&app_id=122963",
                        "fileType": 0,
                        "time": 65127
                      },
                      {
                        "_id": "A000001",
                        "sequence": 2,
                        "title": "飼養要求",
                        "content": null,
                        "fileName": "807306201?h=7231d9a2da&app_id=122963",
                        "fileType": 0,
                        "time": 8839
                      },
                      {
                        "_id": "A000002",
                        "sequence": 3,
                        "title": "正確使用訓練工具",
                        "content": null,
                        "fileName": "192191?h=be09c77984&app_id=122963",
                        "fileType": 0,
                        "time": 102660
                      }
                    ]
                  },
                  {
                    "_id": "A00001",
                    "sequence": 2,
                    "title": "基本指令",
                    "totalTime": 415334,
                    "totalNumber": 9,
                    "subchapters": [
                      {
                        "_id": "A000010",
                        "sequence": 1,
                        "title": "坐下指令",
                        "content": null,
                        "fileName": "807306477?h=c67a24399e&app_id=122963",
                        "fileType": 0,
                        "time": 222140
                      },
                      {
                        "_id": "A000011",
                        "sequence": 2,
                        "title": "握手指令",
                        "content": null,
                        "fileName": "807306477?h=c67a24399e&app_id=122963",
                        "fileType": 0,
                        "time": 151515
                      },
                      {
                        "_id": "A000012",
                        "sequence": 3,
                        "title": "躺下指令",
                        "content": null,
                        "fileName": "807306477?h=c67a24399e&app_id=122963",
                        "fileType": 0,
                        "time": 101960
                      }
                    ]
                  },
                  {
                    "_id": "A00002",
                    "sequence": 3,
                    "title": "問題行為處理",
                    "totalTime": 226280,
                    "totalNumber": 48,
                    "subchapters": [
                      {
                        "_id": "A000020",
                        "sequence": 1,
                        "title": "拉扯繩索問題",
                        "content": null,
                        "fileName": "807306477?h=c67a24399e&app_id=122963",
                        "fileType": 0,
                        "time": 187570
                      },
                      {
                        "_id": "A000021",
                        "sequence": 2,
                        "title": "叫吠問題",
                        "content": null,
                        "fileName": "192191?h=be09c77984&app_id=122963",
                        "fileType": 0,
                        "time": 30376
                      },
                      {
                        "_id": "A000022",
                        "sequence": 3,
                        "title": "咬人問題",
                        "content": null,
                        "fileName": "192191?h=be09c77984&app_id=122963",
                        "fileType": 0,
                        "time": 17780
                      }
                    ]
                  },
                  {
                    "_id": "A00003",
                    "sequence": 4,
                    "title": "社交化訓練",
                    "totalTime": 150778,
                    "totalNumber": 4,
                    "subchapters": [
                      {
                        "_id": "A000030",
                        "sequence": 1,
                        "title": "狗狗間相處",
                        "content": null,
                        "fileName": "807306201?h=7231d9a2da&app_id=122963",
                        "fileType": 0,
                        "time": 99763
                      },
                      {
                        "_id": "A000031",
                        "sequence": 2,
                        "title": "與人類相處",
                        "content": null,
                        "fileName": "192191?h=be09c77984&app_id=122963",
                        "fileType": 0,
                        "time": 119443
                      },
                      {
                        "_id": "A000032",
                        "sequence": 3,
                        "title": "與其他動物相處",
                        "content": null,
                        "fileName": "807306201?h=7231d9a2da&app_id=122963",
                        "fileType": 0,
                        "time": 69779
                      }
                    ]
                  },
                  {
                    "_id": "A00004",
                    "sequence": 5,
                    "title": "進階技巧",
                    "totalTime": 467105,
                    "totalNumber": 30,
                    "subchapters": [
                      {
                        "_id": "A000040",
                        "sequence": 1,
                        "title": "跳躍指令",
                        "content": null,
                        "fileName": "807306201?h=7231d9a2da&app_id=122963",
                        "fileType": 0,
                        "time": 90429
                      },
                      {
                        "_id": "A000041",
                        "sequence": 2,
                        "title": "捷徑指令",
                        "content": null,
                        "fileName": "192191?h=be09c77984&app_id=122963",
                        "fileType": 0,
                        "time": 165719
                      },
                      {
                        "_id": "A000042",
                        "sequence": 3,
                        "title": "尋找物品指令",
                        "content": null,
                        "fileName": "192191?h=be09c77984&app_id=122963",
                        "fileType": 0,
                        "time": 342810
                      }
                    ]
                  }
                ]
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
      const courseHierarchys = await CourseHierarchy.find();

      if (courseHierarchys.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, courseHierarchys);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllCourseHierarchys [ 取得全部課程彙總資料 ]

  //#region getAllCoupons [ 取得全部標籤資料 ]
  /** 取得全部標籤資料 */
  static async getAllCoupons(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "取得全部標籤資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": [
              {
                "_id": "646d8478f3bdeca0cd4c4557",
                "tagNames": [
                  "寵物溝通與信任建立",
                  "寵物溝通"
                ],
                "couponCode": "EYg0XZk7",
                "discountPrice": 894,
                "isEnabled": true,
                "startDate": "2023-03-27T12:47:24.679Z",
                "endDate": "2023-05-03T07:42:44.990Z",
                "createdAt": "2022-09-20T04:33:11.913Z",
                "updatedAt": "2023-02-02T18:02:08.482Z"
              },
              {
                "_id": "646d8478f3bdeca0cd4c4558",
                "tagNames": [
                  "貓咪食譜",
                  "寵物健康照護",
                  "貓咪的解悶遊戲"
                ],
                "couponCode": "jPO0UZ8A",
                "discountPrice": 665,
                "isEnabled": true,
                "startDate": "2023-03-16T06:16:34.664Z",
                "endDate": "2023-06-30T15:19:27.333Z",
                "createdAt": "2022-07-15T02:54:35.417Z",
                "updatedAt": "2022-12-21T15:00:47.966Z"
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
      const platformCoupons = await PlatformCoupons.find();

      if (platformCoupons.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, platformCoupons);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllCoupons [ 取得全部標籤資料 ]

  //#region createCourseHierarchys [ 新增一筆課程彙總資料 ]
  /** 新增一筆課程彙總資料 */
  static async createCourseHierarchys(req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "新增一筆課程彙總資料"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "user": "645a39c19ea91c0447216cc6",
            "tagNames": [
              "貓咪食譜"
            ],
            "cover": "https://fastly.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
            "promoVideo": "https://example.com/videos/promo_video.mp4",
            "title": "成為寵物訓練達人:寵物訓練入門基礎課程",
            "shortDescription": "這堂課將教您如何照顧狗狗的健康和護理需求。我們將探討常見的健康問題預防、疫苗接種和定期檢查的重要性，以確保您的狗狗保持健康和快樂。",
            "description": "<p>在這堂課中，我們將介紹狗狗的基本養育需求，幫助您了解如何照顧一隻健康快樂的狗狗。</p>\n<ul>\n  <li>狗狗的飲食需求：選擇適合的狗糧種類和餵食方式。</li>\n  <li>適合的住所環境：提供舒適的睡覺空間和適合運動的戶外區域。</li>\n  <li>定期醫療護理：疫苗接種、定期驅蟲和常見疾病預防。</li>\n  <li>適度的運動和遊戲：維持狗狗的身體健康和心理活躍。</li>\n</ul>\n<p>透過這些基本養育需求的認識，您將能夠提供一個健康快樂的生活環境給您的狗狗。</p>",
            "level": 0,
            "price": 2500,
            "discountPrice": 1000,
            "enrollmentCount": 0,
            "totalTime": 43200,
            "totalNumber": 55,
            "isFree": false,
            "isPublished": true,
            "discountDate": "2023/05/01",
            "shelfDate": "2023/05/31",
            "createdAt": "2023/01/01",
            "updatedAt": "2023/05/08",
            "chapters": [
              {
                "_id": "6459b6cdaea0942f035f2e37-A001",
                "sequence": 1,
                "title": "在開始之前",
                "totalTime": 3600,
                "totalNumber": 5,
                "subchapters": [
                  {
                    "_id": "6459b6cdaea0942f035f2e37-AA001",
                    "sequence": 1,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-AA002",
                    "sequence": 2,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  }
                ]
              },
              {
                "_id": "6459b6cdaea0942f035f2e37-B001",
                "sequence": 1,
                "title": "在開始之前",
                "totalTime": 3600,
                "totalNumber": 5,
                "subchapters": [
                  {
                    "_id": "6459b6cdaea0942f035f2e37-BB001",
                    "sequence": 1,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-BB002",
                    "sequence": 2,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "https://example.com/videos/promo_video.mp4",
                    "fileType": 0,
                    "time": 600
                  }
                ]
              }
            ]
          }
        }
      * #swagger.responses[200] = {
          description: "成功",
          schema:{
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success"
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
      const data = req.body;

      if (!data.user) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);
      }

      const newCourseHierarchy = await CourseHierarchy.create(data);

      if (!newCourseHierarchy) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);
      }

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess, newCourseHierarchy._id.toString());
    } catch (err) {
      next(err);
    }
  }
  //#endregion createCourseHierarchys [ 新增一筆課程彙總資料 ]

  //#region generateCourseHierarchysData [ 產生假資料至課程彙總資料 ]
  /** 取得全部課程彙總資料 */
  static async generateCourseHierarchysData(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "產生假資料至課程彙總資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "新增成功"
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "statusCode": 400,
            "isSuccess": false,
            "message": "新增失敗"
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
      const service = new FakeInformationService();
      const state = await service.courseHierarchyManyData();

      if (!state) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion generateCourseHierarchysData [ 產生假資料至課程彙總資料 ]

  //#region generateCouponsData [ 產生假資料至平台優惠碼資料表 ]
  /** 產生假資料至平台優惠碼資料表 */
  static async generateCouponsData(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "產生假資料至平台優惠碼資料表"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "新增成功"
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "statusCode": 400,
            "isSuccess": false,
            "message": "新增失敗"
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
      const service = new FakeInformationService();
      const state = await service.couponManyData(30);

      if (!state) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion generateCouponsData [ 產生假資料至平台優惠碼資料表 ]

  //#region generateCourseTagData [ 產生假資料至標籤資料表 ]
  /** 產生假資料至標籤資料表 */
  static async generateCourseTagData(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "產生假資料至標籤資料表"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "新增成功"
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "statusCode": 400,
            "isSuccess": false,
            "message": "新增失敗"
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
      const service = new FakeInformationService();
      const state = await service.courseTagManyData();

      if (!state) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion generateCourseTagData [ 產生假資料至標籤資料表 ]

  //#region generateUserData [ 產生假資料至使用者資料表 ]
  /** 產生假資料至使用者資料表 */
  static async generateUserData(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "產生假資料至使用者資料表"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "新增成功"
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "statusCode": 400,
            "isSuccess": false,
            "message": "新增失敗"
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
      const service = new FakeInformationService();
      const state = await service.userManyData();

      if (!state) return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.CreateFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.CreateSuccess);
    } catch (err) {
      next(err);
    }
  }
  //#endregion generateUserData [ 產生假資料至使用者資料表 ]
}

export { FakeInformationController };
