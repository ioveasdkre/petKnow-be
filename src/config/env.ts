import path from 'path';
import dotenv from 'dotenv';

function localEnv() {
  dotenv.config({ path: path.join(__dirname, '../../.env') });
}

export { localEnv };
