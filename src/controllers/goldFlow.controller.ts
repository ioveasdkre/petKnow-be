import { Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { CourseHierarchy, PlatformCoupons } from '../connections/mongoDB';
import { Level } from '../enums/courseHierarchy.enums';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IReqBody } from '../types/handle.type';
import { isValidObjectId } from '../utils/mongoose.util';
import { IPostCardRequest, IPostCouponRequest } from '../vmodels/goldFlow.model';

class GoldFlowController {
  //#region postCard [ 讀取購物車資料 ]
  /** 讀取購物車資料 */
  static async postCard(req: IReqBody<IPostCardRequest>, res: Response, next: NextFunction) {
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
              "646e0e6ffa0eac0933c5a776",
              "646e0e6ffa0eac0933c5a778",
              "646e0e6ffa0eac0933c5a77e",
              "646e0e6ffa0eac0933c5a78c",
              "646e0e6ffa0eac0933c5a79b",
              "646e0e6ffa0eac0933c5a79c",
              "646e0e6ffa0eac0933c5a7ad",
              "646e0e6ffa0eac0933c5a7ae"
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
                  "cover": "https://thumbs.dreamstime.com/z/cute-funny-dog-stucks-her-tongue-26778597.jpg",
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
                  "cover": "https://thumbs.dreamstime.com/z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",
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
                  "cover": "https://thumbs.dreamstime.com/z/mixed-breed-cat-pug-red-bow-tie-sitting-maltese-dog-fro-front-white-background-129940127.jpg",
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
                  "cover": "https://thumbs.dreamstime.com/z/dog-cat-11133177.jpg",
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
                time: { $round: [{ $divide: ['$totalTime', 3600] }, 1] },
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
            time: { $round: [{ $divide: ['$totalTime', 3600] }, 1] },
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

  //#region postCard [ 查詢單筆優惠卷 ]
  /** 查詢單筆優惠卷 */
  static async postCoupon(req: IReqBody<IPostCouponRequest>, res: Response, next: NextFunction) {
    //#region [ swagger說明文件 ]
    /**
     * #swagger.tags = ["GoldFlow - 金流 API"]
     * #swagger.description = "查詢單筆優惠卷"
     * #swagger.parameters["body"] = {
          description: "資料格式",
          in: "body",
          type: "object",
          required: true,
          schema: {
            "coursesIds": [
              "646e0e6ffa0eac0933c5a776",
              "646e0e6ffa0eac0933c5a778",
              "646e0e6ffa0eac0933c5a77e",
              "646e0e6ffa0eac0933c5a78c",
              "646e0e6ffa0eac0933c5a79b",
              "646e0e6ffa0eac0933c5a79c",
              "646e0e6ffa0eac0933c5a7ad",
              "646e0e6ffa0eac0933c5a7ae"
            ],
            "couponCode": "ycks7e6q"
          }
        }
     * #swagger.responses[200] = {
          description: "成功",
          schema: {
            "statusCode": 200,
            "isSuccess": true,
            "message": "Success",
            "data": {
              "price": 688
            }
          }
        }
      * #swagger.responses[400] = {
          description: "錯誤的請求",
          schema:{
            "success": false,
            "statusCode": 400,
            "message": "Failure"
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
      const { coursesIds, couponCode } = req.body;

      const isValid = coursesIds.every(isValidObjectId);

      if (!isValid) {
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);
      }

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
          $unwind: '$tagNames', // 展开 uniqueTagNames 字段
        },
        {
          $group: {
            _id: null,
            uniqueTagNames: { $addToSet: '$tagNames' }, // 将 tagNames 合并并去重
          },
        },

        {
          $project: {
            _id: 0,
            uniqueTagNames: 1,
          },
        },
      ]);

      console.log(courseHierarchy);
      console.log(courseHierarchy.uniqueTagNames);

      const [platformCoupons] = await PlatformCoupons.aggregate([
        {
          $match: {
            $and: [
              { couponCode: couponCode },
              { tagNames: { $in: courseHierarchy.uniqueTagNames } },
            ],
          },
        },
        {
          $project: {
            price: 1,
          },
        },
        {
          $limit: 1,
        },
      ]);

      if (!platformCoupons)
        return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.Failure);

      return handleResponse(res, HttpStatusCode.OK, HttpMessage.Success, platformCoupons.price);
    } catch (err) {
      next(err);
    }
  }
  //#endregion postCard [ 讀取購物車資料 ]
}

export { GoldFlowController };
