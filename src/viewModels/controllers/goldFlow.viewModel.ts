import { ICourseIdsRequest } from '../shares/course.viewModel';

interface ICreateCartCourse {
  courseId: string;
}

interface ICreateCartCoupon {
  couponCode: string;
}

interface ICourseIdsAndCouponCodeRequest extends ICourseIdsRequest, ICreateCartCoupon {}

interface IPostCheckRequest {
  _id: string;
}

interface IPostNotify {
  TradeInfo: string;
}

export {
  ICreateCartCourse as ISaveOrUpdateUserCartCourse,
  ICreateCartCourse as IUpdateUserCartCourse,
  ICreateCartCoupon as ISaveOrUpdateUserCartCoupon,
  ICourseIdsAndCouponCodeRequest as IPostCartRequest,
  IPostCheckRequest,
  IPostNotify,
};
