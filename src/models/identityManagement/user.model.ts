import { Schema } from 'mongoose';

export interface IUser {
  name: string;
  role: string;
  mug_shot: string;
  email: string;
  password: string;
  lecturerBio: string;
  isFrozen: boolean;
  isNotificationEnabled: boolean;
  isPrivacyEnabled: boolean;
  lastLoginTime: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'name 未填寫'],
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'superadmin'],
    required: true,
    select: false,
  },
  mug_shot: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'email 未填寫'],
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    select: false,
    index: true,
  },
  password: {
    type: String,
    select: false,
  },
  lecturerBio: {
    type: String,
  },
  isFrozen: {
    type: Boolean,
    default: false,
    required: [true, '請填寫必填欄位'],
    select: false,
  },
  isNotificationEnabled: {
    type: Boolean,
    default: true,
    required: [true, 'isNotificationEnabled 未填寫'],
  },
  isPrivacyEnabled: {
    type: Boolean,
    default: true,
    required: [true, 'isPrivacyEnabled 未填寫'],
  },
  lastLoginTime: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
