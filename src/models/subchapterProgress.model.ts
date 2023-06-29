import { Types, Schema, Document } from 'mongoose';

interface ISubchapterProgress {
  course: Types.ObjectId;
  subchapterId: string;
  progress: number;
  isCmpleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ISubchapterProgressModel extends ISubchapterProgress, Document {}

const subchapterProgressSchema = new Schema<ISubchapterProgressModel>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'courseHierarchy',
      required: [true, '請填寫必填欄位'],
    },
    subchapterId: {
      type: String,
      required: [true, '請填寫必填欄位'],
    },
    progress: {
      type: Number,
      max: 100,
      default: 0,
    },
    isCmpleted: {
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

export { subchapterProgressSchema, ISubchapterProgressModel, ISubchapterProgress };
