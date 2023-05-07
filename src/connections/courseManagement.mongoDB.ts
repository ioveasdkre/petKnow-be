import { createConnection, ConnectOptions } from 'mongoose';
import { loadEnv } from '../config/loadEnv';
import { courseSchema } from '../models/courseManagement/courseHierarchy.model';

loadEnv();

if (!process.env.CMG_URI) {
  throw new Error('CMG Database connection string not found in environment variables.');
}

const DB = process.env.CMG_URI;

const CMG = createConnection(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

CMG.once('open', () => {
  console.log('CMG MongoDB connected!');
});

CMG.on('error', err => {
  console.error('CMG MongoDB connection error:', err);
});

const Course = CMG.model('Course', courseSchema);

export { Course };
