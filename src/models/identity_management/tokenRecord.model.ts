import { Schema } from 'mongoose';

export interface ITokenRecord {
  user: { _id: Schema.Types.ObjectId };
  refreshToken: string;
  isExpired: boolean;
  expirationDate: Date;
  createdAt: Date;
}

export const tokenRecordSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '請填寫必填欄位'],
    index: true,
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
