import { Request, Response, NextFunction } from 'express';
import { CourseHierarchy } from '../connections/mongoDB';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';

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
            "message": "Retrieve Failure",
            "data": {
              "carousel": [
                {
                  "_id": "646f7e2f4802a2dbf6b3eb83",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg"
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
              ]
            }
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
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
      const currentDate = new Date();
      const coverURL = process.env.COVER_URL;

      const [carousel] = await CourseHierarchy.aggregate([
        {
          $match: {
            // 添加筛选条件
            isPublished: true,
            isPopular: true,
          },
        },
        {
          $group: {
            _id: null,
            carousel: {
              $push: {
                _id: '$_id',
                title: '$title',
                cover: { $concat: [coverURL, '$cover'] },
              },
            },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            carousel: 1,
          },
        },
        { $limit: 10 }, // 讀取 4筆
      ]);

      const popular = await CourseHierarchy.aggregate([
        { $unwind: '$tagNames' },
        {
          $match: {
            // 添加筛选条件
            isPublished: true,
          },
        },{
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $group: {
            _id: '$tagNames',
            courses: {
              $push: {
                _id: '$_id',
                title: '$title',
                cover: { $concat: [coverURL, '$cover'] },
                instructorName: { $arrayElemAt: ['$user.name', 0] },
                price: '$price',
                discountPrice: {
                  $cond: [
                    {
                      $and: [
                        { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                        { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                      ],
                    },
                    '$discountPrice',
                    null,
                  ],
                },
                isFree: '$isFree',
              },
            },
            count: { $sum: 1 },
          },
        },
        {
          $match: {
            count: { $gt: 3 },
          },
        },
        {
          $project: {
            _id: 0,
            tag: '$_id',
            courses: {
              $slice: ['$courses', 5], // 限制最多 3筆
            },
          },
        },
        { $limit: 4 }, // 讀取 4筆
      ]);

      if (!carousel || popular.length === 0)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.RetrieveFailure, {
        ...carousel,
        popular,
      });
    } catch (err) {
      next(err);
    }
  }
  //#region getIndex [ 首頁 ]
}

export { HomeController };
