import { Schema, Document } from 'mongoose';

interface IPlatformCoupons {
  tagNames: string[];
  couponCode: string;
  price: number;
  isEnabled: boolean;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface IPlatformCouponsModel extends IPlatformCoupons, Document {}

const platformCouponsSchema = new Schema<IPlatformCoupons>(
  {
    tagNames: {
      type: [String],
      required: [true, '優惠標籤未填寫'],
    },
    couponCode: {
      type: String,
      maxlength: 20,
      unique: true,
      required: [true, '優惠代碼未填寫'],
    },
    price: {
      type: Number,
      required: [true, '優惠價格未填寫'],
    },
    isEnabled: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: Date,
      required: [true, '優惠開始日期未填寫'],
    },
    endDate: {
      type: Date,
      required: [true, '優惠結束日期未填寫'],
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

export { platformCouponsSchema, IPlatformCouponsModel, IPlatformCoupons };
