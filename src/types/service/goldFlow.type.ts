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

interface ICheckCourseReturn {
  id?: string;
  platformCoupons?: number;
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

export { ICheckCourse, IOrderParameter, ICheckCourseReturn };
