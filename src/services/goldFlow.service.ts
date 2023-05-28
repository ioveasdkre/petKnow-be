import { Types } from 'mongoose';
import { CourseHierarchy, PlatformCoupons } from '../connections/mongoDB';
import { Level } from '../enums/courseHierarchy.enums';

class GoldFlowService {
  async postCard(coursesIds: string[]) {
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

    return { courseHierarchy, youMightLike };
  }

  async postCoupon(coursesIds: string[], couponCode: string) {
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

    const [platformCoupons] = await PlatformCoupons.aggregate([
      {
        $match: {
          $and: [{ couponCode: couponCode }, { tagNames: { $in: courseHierarchy.uniqueTagNames } }],
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

    return platformCoupons.price;
  }
}

export { GoldFlowService };
