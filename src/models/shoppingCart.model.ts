import { Schema, Types, Document } from 'mongoose';

interface IShoppingCart {
  user?: Types.ObjectId;
  visitor?: Types.ObjectId;
  courseIds: string[];
  couponCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IShoppingCartModel extends IShoppingCart, Document {}

const shoppingCartSchema = new Schema<IShoppingCartModel>(
  {
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
    courseIds: {
      type: [String],
      required: [true, '課程id為必填欄位'],
    },
    couponCode: {
      type: String,
      maxlength: 20,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false },
);

export { shoppingCartSchema, IShoppingCartModel, IShoppingCart };
