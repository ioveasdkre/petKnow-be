
import { IUser } from '../../models/mongoDB/user.model';

interface IVerifyJwtTokenRequest {
  user: IUser;
};

export { IVerifyJwtTokenRequest };
