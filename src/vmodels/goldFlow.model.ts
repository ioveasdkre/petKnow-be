type IPostCardRequest = {
  coursesIds: string[];
}

type IPostCouponRequest = {
  coursesIds: string[];
  couponCode: string;
}

export { IPostCardRequest, IPostCouponRequest };
