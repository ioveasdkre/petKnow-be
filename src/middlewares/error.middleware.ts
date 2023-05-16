import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode, HttpMessage } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';

interface ErrorWithStatusCode extends Error {
  statusCode?: number;
  message: string;
  isOperational: boolean;
}

const handle404Error = (_req: Request, res: Response) => {
  handleResponse(res, HttpStatusCode.NotFound, HttpMessage.NoPage);
};

const resErrorProd = (err: ErrorWithStatusCode, res: Response) => {
  if (err.isOperational) {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    handleResponse(res, HttpStatusCode.InternalServerError, HttpMessage.SystemError);
  }
};

const resErrorDev = (err: ErrorWithStatusCode, res: Response) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const handleErrors = (
  err: ErrorWithStatusCode,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  err.statusCode = err.statusCode || 500;
  if (process.env.ENV === 'dev') {
    return resErrorDev(err, res);
  } else if (err.name === 'ValidationError') {
    err.message = '資料欄位未填寫正確，請重新輸入！';
    err.isOperational = true;
    return resErrorProd(err, res);
  }

  resErrorProd(err, res);
};

// 補捉程式錯誤
function handleUncaughtException(
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  handleErrors(err, req, res, next);
  process.exit(1);
}

// 補捉未處理的 catch
function handleUnhandledRejection(
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  handleErrors(err, req, res, next);
  process.exit(1);
}

export {
  handle404Error,
  handleErrors,
  ErrorWithStatusCode,
  handleUncaughtException,
  handleUnhandledRejection,
};
