import { Request, Response, NextFunction } from 'express';
import { CourseHierarchy, User } from '../connections/mongoDB';
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
                        "fileName": "32436181",
                        "fileType": 0,
                        "time": 65127
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

  //#region getUserCourseCountGreaterThanOne [ 讀取使用者開課數大於 1 ]
  /** 讀取使用者開課數大於 1 */
  static async getUserCourseCountGreaterThanOne(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "讀取使用者開課數大於 1"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "查詢成功",
            "data": [
              {
                "courseIds": [
                  "6493d9bf127ca634f0eeab5c",
                  "6493d9c1127ca634f0eeae6d",
                  "6493d9c2127ca634f0eeafea",
                  "6493d9c2127ca634f0eeb177",
                  "6493d9c4127ca634f0eeb6af",
                  "6493d9c4127ca634f0eeb734",
                  "6493d9c4127ca634f0eeb875",
                  "6493d9c4127ca634f0eeb96a",
                  "6493d9c4127ca634f0eeb9fd",
                  "6493d9c4127ca634f0eeba68",
                  "6493d9c5127ca634f0eebb74"
                ],
                "userId": "6485bc644f8b667f7929159f"
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
      const service = new FakeInformationService();
      const result = await service.getUserCourseCountGreaterThanOneAsync();

      if (!result)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.RetrieveFailure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveSuccess, result);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getUserCourseCountGreaterThanOne [ 讀取使用者開課數大於 1 ]

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
            "promoVideo": "32436181",
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
                    "fileName": "32436181",
                    "fileType": 0,
                    "time": 600
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-AA002",
                    "sequence": 2,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "32436181",
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
                    "fileName": "32436181",
                    "fileType": 0,
                    "time": 600
                  },
                  {
                    "_id": "6459b6cdaea0942f035f2e37-BB002",
                    "sequence": 2,
                    "title": "環境探索引導",
                    "content": null,
                    "fileName": "32436181",
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

      return handleResponse(
        res,
        HttpStatusCode.OK,
        HttpMessage.CreateSuccess,
        newCourseHierarchy._id.toString(),
      );
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
