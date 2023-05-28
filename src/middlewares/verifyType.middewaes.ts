import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IRequestBody } from '../types/handle.type';
import {JwtPayload} from '../types/verifyType.type'
import { isValidObjectId } from '../utils/mongoose.util';
import { IisValidObjectIdsRequest } from '../vmodels/middlewares/mongoDB.viewModel';
import { User } from '../connections/mongoDB';
import { IVerifyJwtTokenRequest } from '../vmodels/middlewares/verifyJwtToken.viewModel';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET not found in environment variables.');
}

const secret = process.env.JWT_SECRET;

async function verifyJwtToken(
  req: IVerifyJwtTokenRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    let auth = req.get('authorization') || (' ' as string);

    const tokenPrefix = 'Bearer ';
    if (auth.startsWith(tokenPrefix)) {
      auth = auth.slice(tokenPrefix.length);
    }

    const claims = jwt.verify(auth, secret) as JwtPayload;

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

const isValidObjectIds = (
  req: IRequestBody<IisValidObjectIdsRequest>,
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

export { isValidObjectIds, verifyJwtToken, secret };
