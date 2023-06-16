import { Types, Schema, Document } from 'mongoose';

interface IOrderDetails {
  order: Types.ObjectId;
  title: string;
  price: number;
  discountPrice?: number;
  isFree?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IOrderDetailsModel extends IOrderDetails, Document {}

const orderDetailsSchema = new Schema<IOrderDetailsModel>(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '請填寫必填欄位'],
    },
    title: {
      type: String,
      required: [true, '請填寫必填欄位'],
    },
    price: {
      type: Number,
      required: [true, '請填寫必填欄位'],
    },
    discountPrice: {
      type: Number,
    },
    isFree: {
      type: Boolean,
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

export { orderDetailsSchema, IOrderDetailsModel, IOrderDetails };
