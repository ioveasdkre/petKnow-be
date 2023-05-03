import { Schema } from 'mongoose';

export interface IThirdPartyAuth {
  user: { _id: Schema.Types.ObjectId };
  provider: string;
  providerId: string;
  accessToken: string;
  refreshToken: string;
  isExpired: boolean;
  expirationDate: Date;
  createdAt: Date;
}

export const thirdPartyAuthSchema = new Schema<IThirdPartyAuth>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '請填寫必填欄位'],
    index: true,
  },
  provider: {
    type: String,
    required: [true, '請填寫必填欄位'],
  },
  providerId: {
    type: String,
    required: [true, '請填寫必填欄位'],
    index: true,
  },
  accessToken: {
    type: String,
    required: [true, '請填寫必填欄位'],
  },
  refreshToken: {
    type: String,
    required: [true, '請填寫必填欄位'],
  },
  isExpired: {
    type: Boolean,
    required: [true, '請填寫必填欄位'],
    default: false,
  },
  expirationDate: {
    type: Date,
    required: [true, '請填寫必填欄位'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
