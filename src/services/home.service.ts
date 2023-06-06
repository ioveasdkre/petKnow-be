import { coverUrl, coverParamsUrl } from '../config/env';
import { CourseHierarchy, CourseTag } from '../connections/mongoDB';
import { Level } from '../enums/courseHierarchy.enums';
import { ISearchCourses } from '../types/home.type';

class HomeService {
  //#region getIndex [ 首頁 ]
  /** 首頁 */
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
              cover: { $concat: [coverUrl, '$cover', coverParamsUrl] },
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
              cover: { $concat: [coverUrl, '$cover', coverParamsUrl] },
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

  //#region getSearchCourses [ 搜尋關鍵字 - 相關課程 ]
  /** 搜尋關鍵字 - 相關課程 */
  async getSearchCoursesAsync(q: string) {
    const currentDate = new Date();

    const [courses] = await CourseHierarchy.aggregate<ISearchCourses>([
      {
        $match: {
          $and: [
            { isPublished: true }, // 判斷已上架
            {
              $or: [
                {
                  title: { $regex: q, $options: 'i' },
                },
                {
                  tagNames: {
                    $elemMatch: {
                      $regex: q,
                      $options: 'i',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      { $sample: { size: 100 } },
      {
        $unwind: '$tagNames', // 展开 uniqueTagNames 字段
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
          courses: {
            $push: {
              _id: '$_id',
              title: '$title',
              shortDescription: '$shortDescription',
              cover: { $concat: [coverUrl, '$cover', coverParamsUrl] },
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
          uniqueTagNames: { $addToSet: '$tagNames' },
        },
      },
      {
        $project: {
          _id: 0, // 排除 _id 欄位
        },
      },
    ]);

    return courses;
  }
  //#endregion getSearchCourses [ 搜尋關鍵字 - 相關課程 ]

  //#region getSearchComboPack [ 搜尋關鍵字 - 組合包 ]
  async getSearchComboPackAsync(tagNameArr: string[]) {
    const currentDate = new Date();

    const [comboPack] = await CourseHierarchy.aggregate([
      {
        $match: {
          $and: [
            { isPublished: true, isPopular: true, tagNames: { $in: tagNameArr } }, // 判斷已 上架 且 為熱門課程
          ],
        },
      },
      {
        $sample: { size: 3 }, // 隨機讀取10筆
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
          courses: {
            $push: {
              _id: '$_id',
              title: '$title',
              shortDescription: '$shortDescription',
              cover: { $concat: [coverUrl, '$cover', coverParamsUrl] },
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
        },
      },
    ]);

    const [courseCards] = await CourseHierarchy.aggregate([
      {
        $match: {
          $and: [
            {
              isPublished: true,
              discountDate: { $ne: null, $gte: currentDate },
              tagNames: { $in: tagNameArr },
            }, // 判斷已上架且為特價課程
          ],
        },
      },
      {
        $sample: { size: 10 }, // 隨機讀取10筆
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
          courses: {
            $push: {
              _id: '$_id',
              title: '$title',
              cover: { $concat: [coverUrl, '$cover', coverParamsUrl] },
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
              discountPrice: '$discountPrice',
              isFree: '$isFree',
            },
          },
        },
      },
      {
        $project: {
          _id: 0, // 排除 _id 欄位
        },
      },
    ]);

    return { comboPack, courseCards };
  }
  //#endregion getSearchComboPack [ 搜尋關鍵字 - 組合包 ]

  //#region getVisitorCourseDetails [ 訪客 課程介紹 ]
  async getVisitorCourseDetails(courseId: string) {
    const currentDate = new Date();

    const [courses] = await CourseHierarchy.aggregate<ISearchCourses>([
      {
        $match: {
          $and: [{ isPublished: true }, { _id: courseId }],
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
          courses: {
            $push: {
              _id: '$_id',
              title: '$title',
              description: '$description',
              cover: { $concat: [coverUrl, '$cover', coverParamsUrl] },
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
        },
      },
    ]);

    return courses;
  }
  //#endregion getVisitorCourseDetails [ 訪客 課程介紹 ]
}

export { HomeService };