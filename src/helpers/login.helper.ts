import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { HttpStatusCode } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET not found in environment variables.');
}

const secret = process.env.JWT_SECRET;

interface JwtPayload {
  _id: string;
}

function verifyJwtToken(req: Request, res: Response) {
  let auth = req.get('authorization') || (' ' as string);

  const tokenPrefix = 'Bearer ';
  if (auth.startsWith(tokenPrefix)) {
    auth = auth.slice(tokenPrefix.length);
  }

  const claims = jwt.verify(auth, secret) as JwtPayload;

  if (!claims) {
    return handleResponse(res, HttpStatusCode.BadRequest, "Unauthenticated");
  }

  return claims;
}

export { verifyJwtToken, secret };
