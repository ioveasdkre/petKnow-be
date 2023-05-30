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
  throw new Error('在環境變量中找不到 testPetknow 數據庫連接字符串');
}

if (!jwtSecret) {
  throw new Error('在環境變量中找不到 JWT_SECRET');
}

if (!goldFlowHashKey || !goldFlowHashIv) {
  throw new Error('在環境變量中找不到 GoldFlowHashKey 或 GoldFlowHashIv');
}

if (!orderSalt || !orderHasKey || !orderHasIv) {
  throw new Error('在環境變量中找不到 orderSalt 或 orderHasKey 或 orderHasIv');
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
