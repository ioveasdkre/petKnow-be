import { Schema, Types, Document } from 'mongoose';

interface IShoppingCart {
  user?: Types.ObjectId;
  visitor?: Types.ObjectId;
  courses: string[];
  couponsCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IShoppingCartModel extends IShoppingCart, Document {}

const shoppingCartSchema = new Schema<IShoppingCartModel>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    index: true,
  },
  visitor: {
    type: Schema.Types.ObjectId,
    unique: true,
    index: true,
  },
  courses: {
    type: [String],
    required: [true, '課程id為必填欄位'],
  },
  couponsCode: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export { shoppingCartSchema, IShoppingCartModel, IShoppingCart };
