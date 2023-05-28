import { createConnection, ConnectOptions } from 'mongoose';
import { mongodbUrl } from '../config/env';
import { courseSchema, ICourse } from '../models/courseHierarchy.model';
import { platformCouponsSchema, IPlatformCoupons } from '../models/platformCoupons.model';
import { UserSchema, IUser } from '../models/user.model';

const MongoDB = createConnection(mongodbUrl, {
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
