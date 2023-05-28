import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

if (!process.env.MONGODB_URL) {
  throw new Error('IDM Database connection string not found in environment variables.');
}

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET not found in environment variables.');
}


const port = process.env.PORT ?? 8000;
const env = process.env.ENV;
const mongodbUrl = process.env.MONGODB_URL;
const coverUrl = process.env.COVER_URL;
const jwtSecret = process.env.JWT_SECRET;

export { port, env,mongodbUrl, coverUrl,jwtSecret };
