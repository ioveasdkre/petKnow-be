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

interface ICheckCourseResult {
  totalPrice: number;
  shoppingCart: ShoppingCartItem[];
  uniqueTagNames?: string[];
  discountedPrice?: number;
}

interface IOrderParameter {
  Email: string;
  Amt: number;
  ItemDesc: string;
  TimeStamp: number;
  MerchantOrderNo: number;
}

export { ICheckCourseResult, IOrderParameter };
