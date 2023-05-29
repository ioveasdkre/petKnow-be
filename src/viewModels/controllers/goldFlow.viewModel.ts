import { ICourseIdsRequest } from '../shares/course.viewModel';

interface ICourseIdsAndCouponCodeRequest extends ICourseIdsRequest {
  couponCode: string;
}

export {
  ICourseIdsRequest as IPostCardRequest,
  ICourseIdsAndCouponCodeRequest as IPostCouponRequest,
  ICourseIdsAndCouponCodeRequest as ICreateOrderRequest,
  ICourseIdsAndCouponCodeRequest as IPostCheckRequest,
};
