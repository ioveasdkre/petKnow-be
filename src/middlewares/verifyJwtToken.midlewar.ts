import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { User } from '../connections/mongoDB';
import { HttpStatusCode } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';
import { IVerifyJwtTokenRequest } from '../vmodels/middlewares/verifyJwtToken.vmodel';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET not found in environment variables.');
}

const secret = process.env.JWT_SECRET;

interface JwtPayload {
  _id: string;
}

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

export { verifyJwtToken, secret };
