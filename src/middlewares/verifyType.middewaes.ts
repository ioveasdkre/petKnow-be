import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { jwtSecret } from '../config/env';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IRequestBody } from '../types/handle.type';
import { JwtPayload } from '../types/verifyType.type';
import { isValidObjectId } from '../utils/mongoose.util';
import {
  IVerifyJwtTokenRequest,
  IVerifyObjectIdsRequest,
} from '../vmodels/middlewares/verifyType.viewModel';
import { User } from '../connections/mongoDB';

async function verifyJwtToken(req: IVerifyJwtTokenRequest, res: Response, next: NextFunction) {
  try {
    let auth = req.get('authorization') || (' ' as string);

    const tokenPrefix = 'Bearer ';
    if (auth.startsWith(tokenPrefix)) {
      auth = auth.slice(tokenPrefix.length);
    }

    const claims = jwt.verify(auth, jwtSecret) as JwtPayload;

    if (!claims) {
      return handleResponse(res, HttpStatusCode.BadRequest, 'Unauthenticated');
    }

    const user = await User.findById(claims._id);

    if (!user) {
      return handleResponse(res, HttpStatusCode.BadRequest, 'user not found');
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
}

const verifyObjectIds = (
  req: IRequestBody<IVerifyObjectIdsRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { coursesIds } = req.body;

    const isValid = coursesIds.every(isValidObjectId);

    if (!isValid) {
      return handleResponse(res, HttpStatusCode.BadRequest, HttpMessage.BadRequest);
    }
    next();
  } catch (err) {
    next(err);
  }
};

export { verifyObjectIds, verifyJwtToken, jwtSecret };
