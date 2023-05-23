import { Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { CourseHierarchy } from '../connections/mongoDB';
import { Level } from '../enums/courseHierarchy.enums';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IReqBody } from '../types/handle.type';
import { isValidObjectId } from '../utils/mongoose.util';
import { IReqCoursesIds } from '../vmodels/goldFlow.model';

class GoldFlowController {
  //#region postCard [ 讀取購物車資料 ]
  /** 讀取購物車資料 */
  static async postCard(req: IReqBody<IReqCoursesIds>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "讀取購物車資料"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "coursesIds": [
              "646b8121b65fd84dc4ab0af5",
              "646b8121b65fd84dc4ab0af6",
              "646b8121b65fd84dc4ab0af7",
              "646b8121b65fd84dc4ab0b06",
              "646b8121b65fd84dc4ab0afd",
              "646b8121b65fd84dc4ab0b09",
              "646b8121b65fd84dc4ab0b0c"
            ]
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": {
              "totalPrice": 28226,
              "shoppingCart": [
                {
                  "_id": "646b8121b65fd84dc4ab0af5",
                  "title": "狗狗訓練入門課程",
                  "cover": "https://thumbs.dreamstime.comz/cute-funny-dog-stucks-her-tongue-26778597.jpg",
                  "level": "中階課程",
                  "time": 341312,
                  "total": 93,
                  "instructorName": "ffffff",
                  "price": 7251,
                  "discountPrice": null,
                  "isFree": false
                },
                {
                  "_id": "646b8121b65fd84dc4ab0af6",
                  "title": "高效狗狗訓練方法",
                  "cover": "https://thumbs.dreamstime.comz/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
                  "level": "初階課程",
                  "time": 496794,
                  "total": 48,
                  "instructorName": "zihyin",
                  "price": 8155,
                  "discountPrice": null,
                  "isFree": false
                }
              ],
              "youMightLike": [
                {
                  "_id": "646b8121b65fd84dc4ab0b45",
                  "title": "高效寵物旅宿訓練指南",
                  "cover": "https://thumbs.dreamstime.comz/mixed-breed-cat-pug-red-bow-tie-sitting-maltese-dog-fro-front-white-background-129940127.jpg",
                  "level": "初階課程",
                  "time": 177234,
                  "total": 67,
                  "instructorName": "test",
                  "price": 7386,
                  "discountPrice": null,
                  "isFree": false
                },
                {
                  "_id": "646b8121b65fd84dc4ab0b5b",
                  "title": "兔兔的健康與飼養",
                  "cover": "https://thumbs.dreamstime.comz/dog-cat-11133177.jpg",
                  "level": "初階課程",
                  "time": 340664,
                  "total": 23,
                  "instructorName": "zihyin",
                  "price": 7805,
                  "discountPrice": null,
                  "isFree": false
                }
              ]
            }
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
      const { coursesIds } = req.body;

      const isValid = coursesIds.every(isValidObjectId);

      if (!isValid) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
      }

      const currentDate = new Date();
      const coverURL = process.env.COVER_URL;

      const [courseHierarchy] = await CourseHierarchy.aggregate([
        {
          $match: {
            $and: [
              { _id: { $in: coursesIds.map(id => new Types.ObjectId(id)) } },
              { isPublished: true }, // 判斷已上架
            ],
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $group: {
            _id: null,
            totalPrice: {
              $sum: {
                $cond: [
                  {
                    $eq: ['$isFree', true], // 判斷免費課程
                  },
                  0,
                  {
                    $cond: [
                      {
                        $and: [
                          { $ifNull: ['$discountDate', false] }, // 判斷特價日期不為空
                          { $gte: ['$discountDate', currentDate] }, // 判斷特價日期大於等於今天
                        ],
                      },
                      '$discountPrice',
                      '$price',
                    ],
                  },
                ],
              },
            },
            shoppingCart: {
              $push: {
                _id: '$_id',
                title: '$title',
                cover: { $concat: [coverURL, '$cover'] },
                level: {
                  $switch: {
                    branches: Object.entries(Level).map(([level, levelName]) => ({
                      case: { $eq: ['$level', parseInt(level)] },
                      then: levelName,
                    })),
                    default: null,
                  },
                },
                time: '$totalTime',
                total: '$totalNumber',
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
          },
        },
        {
          $project: {
            _id: 0, // 排除 _id 欄位
            totalPrice: 1,
            shoppingCart: 1,
          },
        },
      ]);

      const youMightLike = await CourseHierarchy.aggregate([
        {
          $match: {
            $and: [
              { isPublished: true, isPopular: true }, // 判斷已 上架 且 為熱門課程
            ],
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $sample: { size: 10 }, // 隨機讀取10筆
        },
        {
          $project: {
            _id: '$_id',
            title: '$title',
            cover: { $concat: [coverURL, '$cover'] },
            level: {
              $switch: {
                branches: Object.entries(Level).map(([level, levelName]) => ({
                  case: { $eq: ['$level', parseInt(level)] },
                  then: levelName,
                })),
                default: null,
              },
            },
            time: '$totalTime',
            total: '$totalNumber',
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
      ]);

      if (!courseHierarchy)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.NotFound);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, {
        ...courseHierarchy,
        youMightLike,
      });
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCard [ 讀取購物車資料 ]
}

export { GoldFlowController };
