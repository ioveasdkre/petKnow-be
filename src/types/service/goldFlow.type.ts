interface ICheckCardCoursesReturn {
  id?: string;
  platformCoupons?: IPlatfoemCoupon;
  totalPrice: number;
  shoppingCart: ShoppingCartItem[];
  uniqueTagNames?: string[] | undefined;
  discountedPrice?: number | undefined;
}

interface ShoppingCartItem {
  _id: string;
  title: string;
  cover: string;
  level: string | null;
  time: number;
  total: number;
  instructorName: string;
  price: number;
  discountPrice: number | null;
  isFree: boolean;
}

interface ICheckCourse {
  totalPrice: number;
  shoppingCart: ShoppingCartItem[];
  uniqueTagNames?: string[];
  courseIds?: string;
  discountedPrice?: number;
}

interface IPlatfoemCoupon {
  couponCode: string;
  couponPrice: number;
}

interface ICheckCourseReturn {
  _id?: string;
  platformCoupons?: IPlatfoemCoupon;
  totalPrice: number;
  shoppingCart: ShoppingCartItem[];
  uniqueTagNames?: string[] | undefined;
  discountedPrice?: number | undefined;
  email?: string;
  amt?: number;
  itemDesc?: string;
  timeStamp?: number;
  merchantOrderNo?: number;
}

interface IOrderParameter {
  Email: string;
  Amt: number;
  ItemDesc: string;
  TimeStamp: number;
  MerchantOrderNo: number;
}

export { ICheckCardCoursesReturn, ICheckCourse, IOrderParameter, ICheckCourseReturn };
