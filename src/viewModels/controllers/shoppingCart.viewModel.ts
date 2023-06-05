import { Types } from 'mongoose';

interface IShoppingCart {
  user: Types.ObjectId;
  courses: string[];
}

export { IShoppingCart as IPostShoppingCart };
