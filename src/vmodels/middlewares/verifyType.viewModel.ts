import { IUser } from '../../models/user.model';
import { IRequestBody } from '../../types/handle.type';

interface IVerifyJwtTokenRequest extends IRequestBody {
  user?: IUser;
}
type IVerifyObjectIdsRequest = {
  coursesIds: string[];
}

export { IVerifyJwtTokenRequest,IVerifyObjectIdsRequest };
