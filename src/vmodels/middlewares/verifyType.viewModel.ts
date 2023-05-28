import { IUser } from '../../models/user.model';
import { IRequestBody } from '../../types/handle.type';

interface IVerifyJwtTokenRequest extends IRequestBody {
  user?: IUser;
}
type IVerifyObjectIdsRequest = {
  courseIds: string[];
}

export { IVerifyJwtTokenRequest,IVerifyObjectIdsRequest };
