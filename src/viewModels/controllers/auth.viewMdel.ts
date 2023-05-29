import { IUser } from '../../models/user.model';
import { IRequestBody } from '../../types/handle.type';

interface IUserExistsRequest extends IRequestBody {
  user?: IUser;
}

export { IUserExistsRequest };
