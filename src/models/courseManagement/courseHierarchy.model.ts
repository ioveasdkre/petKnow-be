import { Schema } from 'mongoose';

const subchapterSchema = new Schema({
  _id: {
    type: String,
    index: true,
    unique: true,
    required: [true, '請填寫必填欄位'],
  },
  sequence: {
    type: Number,
    integer: true,
    required: [true, '第幾子章節未填寫'],
  },
  title: {
    type: String,
    maxlength: 100,
    required: [true, '子章節標題未填寫'],
  },
  content: {
    type: String,
    maxlength: 5000,
    default: null,
  },
  fileName: {
    type: String,
    maxlength: 255,
    required: [true, '請填寫必填欄位'],
  },
  fileType: {
    type: String,
    maxlength: 255,
    enum: [0, 1],
    required: [true, '未上傳檔案'],
  },
  time: {
    type: Number,
    integer: true,
    required: [true, '請填寫必填欄位'],
  },
});

const chapterSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    required: [true, '請填寫必填欄位'],
  },
  sequence: {
    type: Number,
    integer: true,
    required: [true, '第幾章節未填寫'],
  },
  title: {
    type: String,
    maxlength: 100,
    required: [true, '章節標題未填寫'],
  },
  totalTime: {
    type: Number,
    integer: true,
    default: 0,
    required: [true, '請填寫必填欄位'],
  },
  totalNumber: {
    type: Number,
    integer: true,
    default: 0,
    required: [true, '請填寫必填欄位'],
  },
  subchapters: [subchapterSchema],
});

export const courseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '請填寫必填欄位'],
      index: true,
    },
    tagsNames: {
      type: [String],
      default: [],
    },
    cover: {
      type: String,
      maxlength: 255,
      required: [true, '封面圖片未上傳'],
    },
    promoVideo: {
      type: String,
      maxlength: 255,
      required: [true, '宣傳影片未上傳'],
    },
    title: {
      type: String,
      maxlength: 255,
      required: [true, '課程標題未填寫'],
      index: true,
    },
    shortDescription: {
      type: String,
      maxlength: 500,
      required: [true, '簡介未填寫'],
    },
    description: {
      type: String,
      maxlength: 5000,
      required: [true, '詳細介紹未填寫'],
    },
    level: {
      type: Number,
      default: 0,
      enum: [0, 1, 2, 3],
      index: true,
      integer: true,
    },
    price: {
      type: Number,
      index: true,
    },
    discountPrice: {
      type: Number,
    },
    enrollmentCount: {
      type: Number,
      integer: true,
      default: 0,
    },
    totalTime: {
      type: Number,
      integer: true,
      default: 0,
    },
    totalNumber: {
      type: Number,
      integer: true,
      default: 0,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: [true, '是否上架未填寫'],
    },
    discountData: {
      type: Date,
      default: null,
    },
    shelfDate: {
      type: Date,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    chapters: [chapterSchema],
  },
  { versionKey: false },
);
