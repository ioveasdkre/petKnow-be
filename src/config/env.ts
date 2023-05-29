import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const port = process.env.PORT ?? 8000;
const env = process.env.ENV;
const mongodbUrl = process.env.MONGODB_URL;
const coverUrl = process.env.COVER_URL;
const jwtSecret = process.env.JWT_SECRET;
const merchantID = process.env.MERCHANTID;
const respondType = process.env.REPONDTYPE;
const version = process.env.VERSION;
const algorithm = process.env.ALGORITHM;
const goldFlowHashKey = process.env.GOLDFLOWHASHKEY;
const goldFlowHashIv = process.env.GOLDFLOWHASHIV;
const orderSalt = process.env.ORDERSALT;
const orderHasKey = process.env.ORDERHASHKEY;
const orderHasIv = process.env.ORDERHASHIV;

if (!mongodbUrl) {
  throw new Error('IDM Database connection string not found in environment variables.');
}

if (!jwtSecret) {
  throw new Error('JWT_SECRET not found in environment variables.');
}

if (!goldFlowHashKey || !goldFlowHashIv) {
  throw new Error('GoldFlowHashKey or GoldFlowHashIv is empty');
}

export {
  port,
  env,
  mongodbUrl,
  coverUrl,
  jwtSecret,
  merchantID,
  respondType,
  version,
  algorithm,
  goldFlowHashKey,
  goldFlowHashIv,
  orderSalt,
  orderHasKey,
  orderHasIv,
};
