interface ICheckCartCoursesReturn {
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
  courseIds?: string[];
  courseIdsStr?: string;
  discountedPrice?: number;
}

interface IPlatfoemCoupon {
  couponCode: string;
  couponPrice: number;
}

interface ICreateOrderReturn {
  platformCoupons?: IPlatfoemCoupon;
  totalPrice: number;
  shoppingCart: ShoppingCartItem[];
  uniqueTagNames?: string[] | undefined;
  courseIdsStr?: string;
  discountedPrice?: number | undefined;
  amt?: number;
  itemDesc?: string;
  timeStamp?: number;
  merchantOrderNo?: string;
}

interface IOrderParameter {
  email: string;
  amt: number;
  itemDesc: string;
  timeStamp: number;
  merchantOrderNo: string;
}

export { ICheckCartCoursesReturn, ICheckCourse, IOrderParameter, ICreateOrderReturn };
