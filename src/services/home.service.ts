import { coverUrl } from '../config/env';
import { CourseHierarchy, CourseTag } from '../connections/mongoDB';

class HomeService {
  async getIndex() {
    const currentDate = new Date();

    const [carousel] = await CourseHierarchy.aggregate([
      {
        $match: {
          // 添加筛选条件
          isPublished: true,
          isPopular: true,
        },
      },
      { $sample: { size: 10 } }, // 讀取 10筆並隨機排序
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
          carousel: {
            $push: {
              _id: '$_id',
              title: '$title',
              cover: { $concat: [coverUrl, '$cover'] },
              instructorName: { $arrayElemAt: ['$user.name', 0] },
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
    ]);

    const popular = await CourseHierarchy.aggregate([
      { $unwind: '$tagNames' },
      {
        $match: {
          // 添加筛选条件
          isPublished: true,
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
          _id: '$tagNames',
          courses: {
            $push: {
              _id: '$_id',
              title: '$title',
              cover: { $concat: [coverUrl, '$cover'] },
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
          count: { $gt: 5 },
        },
      },
      { $sample: { size: 4 } },
      {
        $project: {
          _id: 0,
          tag: '$_id',
          courses: {
            $slice: [
              {
                $map: {
                  input: { $range: [0, { $size: '$courses' }] },
                  as: 'index',
                  in: {
                    $arrayElemAt: [
                      '$courses',
                      { $floor: { $multiply: [{ $rand: {} }, { $size: '$courses' }] } },
                    ],
                  },
                },
              },
              5, // 限制最多 5 个随机值
            ],
          },
        },
      },
    ]);

    const [tagNames] = await CourseTag.aggregate([
      { $sample: { size: 30 } },
      {
        $group: {
          _id: null,
          tagNames: { $push: '$name' },
        },
      },
      {
        $project: {
          _id: 0,
          tagNames: 1,
        },
      },
    ]);

    return { carousel, popular, tagNames: tagNames.tagNames };
  }
  //#endregion getIndex [ 首頁 ]
}

export { HomeService };
