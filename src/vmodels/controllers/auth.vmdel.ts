import { IUser } from '../../models/mongoDB/user.model';

interface IUserExistsRequest {
  user: IUser;
}

export { IUserExistsRequest };
