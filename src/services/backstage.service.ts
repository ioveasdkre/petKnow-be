import { Types } from 'mongoose';
import { CourseHierarchy, Order } from '../connections/mongoDB';
import { IMyClassroomResult } from '../types/backstage.type';

class BackstageService {
  //#region getMyClassroomAsync [ 使用者 後台 - 我的課堂 ]
  /** 使用者 後台 - 我的課堂 */
  async getMyClassroomAsync(user: Types.ObjectId) {
    const purchasedCourses = await Order.aggregate<IMyClassroomResult>([
      {
        $match: {
          user: user,
          isPayment: true,
        },
      },
      {
        $lookup: {
          from: 'orderdetails', // 订单详情集合的名称
          localField: '_id',
          foreignField: 'order',
          as: 'orderDetails',
        },
      },
      {
        $project: {
          _id: 0,
          courseIds: '$orderDetails._id',
        },
      },
    ]);

    const courseIds = [...new Set(purchasedCourses.flatMap(item => item.courseIds))];

    const courseHierarchys = await CourseHierarchy.aggregate([
      {
        $match: {
          _id: { $in: courseIds.map(id => new Types.ObjectId(id)) },
        },
      },
      {
        $project: {
          _id: 0,
          courseIds: '$orderDetails._id',
        },
      },
    ]);

    return courseHierarchys;
  }
  //#endregion getMyClassroomAsync [ 使用者 後台 - 我的課堂 ]
}

export { BackstageService };
