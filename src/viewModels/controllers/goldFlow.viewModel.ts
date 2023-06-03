import { ICourseIdsRequest } from '../shares/course.viewModel';

interface ICourseIdsAndCouponCodeRequest extends ICourseIdsRequest {
  couponCode: string;
}

export {
  ICourseIdsAndCouponCodeRequest as IPostCardRequest,
  ICourseIdsAndCouponCodeRequest as ICreateOrderRequest,
  ICourseIdsAndCouponCodeRequest as IPostCheckRequest,
};
