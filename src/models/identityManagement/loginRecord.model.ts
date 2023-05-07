import { Schema } from 'mongoose';

export interface ILoginRecord {
  user: { _id: Schema.Types.ObjectId };
  isSuccessful: boolean;
  loginTime: Date;
}

export const loginRecordSchema = new Schema<ILoginRecord>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '請填寫必填欄位'],
    index: true,
  },
  isSuccessful: {
    type: Boolean,
    required: [true, '請填寫必填欄位'],
  },
  loginTime: {
    type: Date,
    default: Date.now(),
    select: false,
    index: true,
  },
});
