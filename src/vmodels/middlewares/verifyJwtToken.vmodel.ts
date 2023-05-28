import { IUser } from '../../models/user.model';
import { IRequestBody } from '../../types/handle.type';

interface IVerifyJwtTokenRequest extends IRequestBody {
  user?: IUser;
}

export { IVerifyJwtTokenRequest };
