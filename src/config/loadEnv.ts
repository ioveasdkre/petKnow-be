import path from 'path';
import dotenv from 'dotenv';

export const loadEnv = () => {
  dotenv.config({ path: path.join(__dirname, '../../.env') });
};
