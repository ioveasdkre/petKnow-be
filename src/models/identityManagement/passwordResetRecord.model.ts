import { Schema } from 'mongoose';

export interface IPasswordResetRecord {
  user: { _id: Schema.Types.ObjectId };
  token: string;
  isExpired: boolean;
  expirationDate: Date;
  createdAt: Date;
}

export const passwordResetRecordSchema = new Schema<IPasswordResetRecord>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '請填寫必填欄位'],
    index: true,
  },
  token: {
    type: String,
    required: [true, '請填寫必填欄位'],
    index: true,
  },
  isExpired: {
    type: Boolean,
    required: [true, '請填寫必填欄位'],
  },
  expirationDate: {
    type: Date,
    required: [true, '請填寫必填欄位'],
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    select: false,
  },
});
