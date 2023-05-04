import { createConnection, ConnectOptions } from 'mongoose';
import { loadEnv } from '../config/loadEnv';
import { ILoginRecord, loginRecordSchema } from '../models/identity_management/loginRecord.model';
import {
  IPasswordResetRecord,
  passwordResetRecordSchema,
} from '../models/identity_management/passwordResetRecord.model';
import {
  IThirdPartyAuth,
  thirdPartyAuthSchema,
} from '../models/identity_management/thirdPartyAuth.model';
import { ITokenRecord, tokenRecordSchema } from '../models/identity_management/tokenRecord.model';
import { IUser, userSchema } from '../models/identity_management/user.model';

loadEnv();

if (!process.env.IDM_URI) {
  throw new Error('IDM Database connection string not found in environment variables.');
}

const DB = process.env.IDM_URI;

const IDM = createConnection(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

IDM.once('open', () => {
  console.log('IDM MongoDB connected!');
});

IDM.on('error', err => {
  console.error('IDM MongoDB connection error:', err);
});

const LoginRecord = IDM.model<ILoginRecord>('LoginRecord', loginRecordSchema);
const PasswordResetRecord = IDM.model<IPasswordResetRecord>(
  'PasswordResetRecord',
  passwordResetRecordSchema,
);
<<<<<<< Updated upstream
export const ThirdPartyAuth = IDM.model<IThirdPartyAuth>('ThirdPartyAuth', thirdPartyAuthSchema);
export const TokenRecord = IDM.model<ITokenRecord>('Authentication', tokenRecordSchema);
export const User = IDM.model<IUser>('User', userSchema);

export { IDM };
=======
const ThirdPartyAuth = IDM.model<IThirdPartyAuth>('ThirdPartyAuth', thirdPartyAuthSchema);
const TokenRecord = IDM.model<ITokenRecord>('Authentication', tokenRecordSchema);
const User = IDM.model<IUser>('User', userSchema);

export { IDM, LoginRecord, PasswordResetRecord, ThirdPartyAuth, TokenRecord, User };
>>>>>>> Stashed changes
