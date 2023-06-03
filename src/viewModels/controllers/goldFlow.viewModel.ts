import { ICourseIdsRequest } from '../shares/course.viewModel';

interface ICourseIdsAndCouponCodeRequest extends ICourseIdsRequest {
  couponCode: string;
}

interface IPostCheckRequest {
  amt: number;
  itemDesc: string;
  email: string;
  timeStamp: number;
  merchantOrderNo: string;
}

export {
  ICourseIdsAndCouponCodeRequest as IPostCartRequest,
  ICourseIdsAndCouponCodeRequest as ICreateOrderRequest,
  IPostCheckRequest,
};
