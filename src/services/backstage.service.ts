import { Types } from 'mongoose';
import { coverUrl, coverParamsUrl } from '../config/env';
import { CourseHierarchy, Order, OrderDetails } from '../connections/mongoDB';

class BackstageService {
  //#region postMyClassroomAsync [ 首頁 ]
  /** 首頁 */
  async postMyClassroomAsync(user: Types.ObjectId) {
    const purchasedCourses = await Order.aggregate([
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
          courseIds: '$orderDetails._id',
        },
      },
    ]);

    const courseIds = purchasedCourses.reduce((acc, order) => {
      return acc.concat(order.courseIds.map(id => id.toString()));
    }, []);

    return;
  }
  //#endregion postMyClassroomAsync [ 首頁 ]
}

export { BackstageService };
