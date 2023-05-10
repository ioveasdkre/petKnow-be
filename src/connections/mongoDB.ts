import { createConnection, ConnectOptions } from 'mongoose';
import { UserSchema } from '../models/mongoDB/user.model';

if (!process.env.MONGODB_URI) {
  throw new Error('IDM Database connection string not found in environment variables.');
}

const DB = process.env.MONGODB_URI;

const MongoDB = createConnection(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

MongoDB.once('open', () => {
  console.log('MongoDB MongoDB connected!');
});

MongoDB.on('error', err => {
  console.error('MongoDB MongoDB connection error:', err);
});

const User = MongoDB.model('User', UserSchema);

export { User };
