import { Schema, Document } from 'mongoose';

interface ICourseTag extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const courseTagSchema = new Schema<ICourseTag>(
  {
    name: {
      type: String,
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

export { courseTagSchema, ICourseTag };
