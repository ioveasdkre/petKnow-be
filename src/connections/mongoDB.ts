import { createConnection, ConnectOptions } from 'mongoose';
import { courseSchema, ICourse } from '../models/courseHierarchy.model';
import { platformCouponsSchema, IPlatformCoupons } from '../models/platformCoupons.model';
import { UserSchema, IUser } from '../models/user.model';

if (!process.env.MONGODB_URL) {
  throw new Error('IDM Database connection string not found in environment variables.');
}

const DB = process.env.MONGODB_URL;

const MongoDB = createConnection(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

MongoDB.once('open', () => {
  console.log('MongoDB connected!');
});

MongoDB.on('error', err => {
  console.error('MongoDB connection error:', err);
});

const CourseHierarchy = MongoDB.model<ICourse>('CourseHierarchy', courseSchema);
const PlatformCoupons = MongoDB.model<IPlatformCoupons>('PlatformCoupons', platformCouponsSchema);
const User = MongoDB.model<IUser>('User', UserSchema);

export { CourseHierarchy, PlatformCoupons, User };
