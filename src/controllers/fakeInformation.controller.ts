import { Request, Response, NextFunction } from 'express';
import { CourseHierarchy } from '../connections/mongoDB';
import { User } from '../connections/mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { FakeInformationService } from '../services/fakeInformation.service';

class FakeInformationController {
  //#region getAllUser [ 取得全部使用者的 _id 資料 ]
  /** 取得全部使用者的 _id 資料 */
  static async getAllUserId(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "產生假資料至課程彙總資料"
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
      const Users = await User.distinct('_id');

      if (Users.length === 0) return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, Users);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllUser [ 取得全部使用者的 _id 資料 ]

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
                "_id": "645a3a689ea91c0447216cc9",
                "user": "645a39c19ea91c0447216cc6",
                "tagsNames": [
                  "貓咪食譜"
                ],
                "cover": "https://fastly.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
                "promoVideo": "https://example.com/videos/promo_video.mp4",
                "title": "成為寵物訓練達人:寵物訓練入門基礎課程",
                "shortDescription": "犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。主要訓練課程：- 30日基本訓練寄宿課程- 45日高級訓練寄宿課程",
                "description": "本課程適合對象 ：家有幼犬之飼主。您將能夠透過本課程獲得：基礎幼犬互動訓練提高幼犬社會化經驗提高幼犬於外界環境之適應力習得犬隻基礎馴養技巧幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度 @src@src.   查看更多立即購課",
                "level": 0,
                "price": 2500,
                "discountPrice": 1000,
                "enrollmentCount": 0,
                "totalTime": 43200,
                "totalNumber": 55,
                "isFree": false,
                "isPublished": false,
                "discountDate": "2023-04-30T16:00:00.000Z",
                "shelfDate": "2023-05-30T16:00:00.000Z",
                "createdAt": "2022-12-31T16:00:00.000Z",
                "updatedAt": "2023-05-07T16:00:00.000Z",
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
                        "fileType": "0",
                        "time": 600
                      },
                      {
                        "_id": "6459b6cdaea0942f035f2e37-AA002",
                        "sequence": 2,
                        "title": "環境探索引導",
                        "content": null,
                        "fileName": "https://example.com/videos/promo_video.mp4",
                        "fileType": "0",
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
                        "fileType": "0",
                        "time": 600
                      },
                      {
                        "_id": "6459b6cdaea0942f035f2e37-BB002",
                        "sequence": 2,
                        "title": "環境探索引導",
                        "content": null,
                        "fileName": "https://example.com/videos/promo_video.mp4",
                        "fileType": "0",
                        "time": 600
                      }
                    ]
                  }
                ]
              }
            ]
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
      const courseHierarchys = await CourseHierarchy.find();

      if (courseHierarchys.length === 0)
        return handleResponse(res, HttpStatusCode.OK, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, courseHierarchys);
    } catch (err) {
      next(err);
    }
  }
  //#endregion getAllCourseHierarchys [ 取得全部課程彙總資料 ]

  //#region createCourseHierarchys [ 新增一筆課程彙總資料 ]
  /** 取得全部課程彙總資料 */
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
            "tagsNames": [
              "貓咪食譜"
            ],
            "cover": "https://fastly.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
            "promoVideo": "https://example.com/videos/promo_video.mp4",
            "title": "成為寵物訓練達人:寵物訓練入門基礎課程",
            "shortDescription": "犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。主要訓練課程：- 30日基本訓練寄宿課程- 45日高級訓練寄宿課程",
            "description": "本課程適合對象 ：家有幼犬之飼主。您將能夠透過本課程獲得：基礎幼犬互動訓練提高幼犬社會化經驗提高幼犬於外界環境之適應力習得犬隻基礎馴養技巧幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度 @src@src.   查看更多立即購課",
            "level": 0,
            "price": 2500,
            "discountPrice": 1000,
            "enrollmentCount": 0,
            "totalTime": 43200,
            "totalNumber": 55,
            "is_free": false,
            "is_published": true,
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
            "message": "Bad Request"
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
      const data = req.body;

      if (!data.user) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      }

      await CourseHierarchy.create(data);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);
    } catch (err) {
      next(err);
    }
  }
  //#endregion createCourseHierarchys [ 新增一筆課程彙總資料 ]

  //#region generateData [ 產生假資料至課程彙總資料 ]
  /** 取得全部課程彙總資料 */
  static async generateData(_req: Request, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["FakeInformation - 假資料 API"]
     * #swagger.description = "產生假資料至課程彙總資料"
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success"
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
      const service = new FakeInformationService();
      const state = await service.GenerateManyData();

      if (!state) return handleResponse(res, HttpStatusCode.OK, HttpMessage.Failure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success);
    } catch (err) {
      next(err);
    }
  }
  //#endregion generateData [ 產生假資料至課程彙總資料 ]
}

export { FakeInformationController };
