import crypto from 'crypto';
import { orderSalt as salt, orderHasKey as hasKey, orderHasIv as hasIv } from '../config/env';

function createOrderIdAesEncrypt(data: string): string {
  const key = crypto.scryptSync(hasKey, salt, 32); // 密钥
  const iv = Buffer.from(hasIv, 'hex'); // 初始化向量
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

function createOrderIdAesDecrypt(encryptedData: string): string {
  const key = crypto.scryptSync(hasKey, salt, 32); // 密钥
  const iv = Buffer.from(hasIv, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

export { createOrderIdAesEncrypt, createOrderIdAesDecrypt };
