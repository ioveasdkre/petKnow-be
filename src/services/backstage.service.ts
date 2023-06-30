import { Types } from 'mongoose';
import { Order } from '../connections/mongoDB';

class BackstageService {
  //#region getMyClassroomAsync [ 首頁 ]
  /** 首頁 */
  async getMyClassroomAsync(user: Types.ObjectId) {
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

    return purchasedCourses;
  }
  //#endregion getMyClassroomAsync [ 首頁 ]
}

export { BackstageService };
