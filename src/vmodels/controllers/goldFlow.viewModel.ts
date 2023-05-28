import { ICourseIdsRequest } from '../shares/course.viewModel';

interface IPostCardRequest extends ICourseIdsRequest {}

interface IPostCouponRequest extends ICourseIdsRequest {
  couponCode: string;
}

interface IPostCheckRequest extends ICourseIdsRequest {
  couponCode: string;
}

export { IPostCardRequest, IPostCouponRequest, IPostCheckRequest };
