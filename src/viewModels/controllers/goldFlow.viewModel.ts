import { ICourseIdsRequest } from '../shares/course.viewModel';

interface ICreateCartCourse {
  courseId: string;
}

interface ICreateCartCoupon {
  couponCode: string;
}

interface ICourseIdsAndCouponCodeRequest extends ICourseIdsRequest, ICreateCartCoupon {}

interface IPostCheckRequest {
  amt: number;
  itemDesc: string;
  email: string;
  timeStamp: number;
  merchantOrderNo: string;
}

export {
  ICreateCartCourse as ISaveOrUpdateUserCartCourse,
  ICreateCartCourse as IUpdateUserCartCourse,
  ICreateCartCoupon as ISaveOrUpdateUserCartCoupon,
  ICourseIdsAndCouponCodeRequest as IPostCartRequest,
  ICourseIdsAndCouponCodeRequest as ICreateOrderRequest,
  IPostCheckRequest,
};
