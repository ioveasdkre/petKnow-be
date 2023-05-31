import { Schema, Document } from 'mongoose';

interface ICourseTag {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ICourseTagModel extends ICourseTag, Document {}

const courseTagSchema = new Schema<ICourseTagModel>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, '標籤未填寫'],
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

export { courseTagSchema, ICourseTagModel, ICourseTag };
