import { Types, Schema, Document } from 'mongoose';

interface IOrder {
  user: Types.ObjectId;
  userName: string;
  merchantOrderNo: string;
  tradeSha: string;
  tradeInfo: string;
  merchantID: string;
  version: number;
  amt: number;
  couponCode?: string;
  couponPrice?: number;
  itemDesc: string;
  email: string;
  timeStamp: number;
  isPayment?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IOrderModel extends IOrder, Document {}

const orderSchema = new Schema<IOrderModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '請填寫必填欄位'],
    },
    userName: {
      type: String,
      required: [true, '請填寫必填欄位'],
    },
    merchantOrderNo: {
      type: String,
      unique: true,
      index: true,
      maxlength: 30,
      required: [true, '請填寫必填欄位'],
    },
    tradeSha: {
      type: String,
      required: [true, '請填寫必填欄位'],
    },
    tradeInfo: {
      type: String,
      required: [true, '請填寫必填欄位'],
    },
    merchantID: {
      type: String,
      maxlength: 20,
      required: [true, '請填寫必填欄位'],
    },
    version: {
      type: Number,
      maxlength: 5,
      required: [true, '請填寫必填欄位'],
    },
    amt: {
      type: Number,
      maxlength: 10,
      required: [true, '請填寫必填欄位'],
    },
    couponCode: {
      type: String,
      maxlength: 20,
    },
    couponPrice: {
      type: Number,
    },
    itemDesc: {
      type: String,
      maxlength: 50,
      required: [true, '請填寫必填欄位'],
    },
    email: {
      type: String,
      maxlength: 50,
      required: [true, '請填寫必填欄位'],
    },
    timeStamp: {
      type: Number,
      maxlength: 50,
      required: [true, '請填寫必填欄位'],
    },
    isPayment: {
      type: Boolean,
      default: false,
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

export { orderSchema, IOrderModel, IOrder };
