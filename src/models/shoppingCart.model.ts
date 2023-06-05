import { Schema, Types, Document } from 'mongoose';

interface IShoppingCart {
  user: Types.ObjectId;
  courses: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface IShoppingCartModel extends IShoppingCart, Document {}

const shoppingCartSchema = new Schema<IShoppingCartModel>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: [true, '請填寫必填欄位'],
    index: true,
  },
  courses: {
    type: [String],
    required: [true, '請填寫必填欄位'],
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
