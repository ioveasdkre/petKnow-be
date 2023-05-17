import { createConnection, ConnectOptions } from 'mongoose';
import { ILoginRecord, loginRecordSchema } from '@src/models/identityManagement/loginRecord.model';
import {
  IPasswordResetRecord,
  passwordResetRecordSchema,
} from '@src/models/identityManagement/passwordResetRecord.model';
import {
  IThirdPartyAuth,
  thirdPartyAuthSchema,
} from '@src/models/identityManagement/thirdPartyAuth.model';
import { ITokenRecord, tokenRecordSchema } from '@src/models/identityManagement/tokenRecord.model';
import { IUser, userSchema } from '@src/models/identityManagement/user.model';

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
const ThirdPartyAuth = IDM.model<IThirdPartyAuth>('ThirdPartyAuth', thirdPartyAuthSchema);
const TokenRecord = IDM.model<ITokenRecord>('Authentication', tokenRecordSchema);
const User = IDM.model<IUser>('User', userSchema);

export { LoginRecord, PasswordResetRecord, ThirdPartyAuth, TokenRecord, User };
