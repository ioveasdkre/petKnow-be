import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/handle.enum';
import { handleResponse } from '../helpers/handle.helper';

interface ErrorWithStatusCode extends Error {
  statusCode?: number;
  message: string;
  isOperational: boolean;
}

const handle404Error = (_req: Request, res: Response) => {
  handleResponse(res, HttpStatusCode.NotFound, '無此頁面資訊');
};

const resErrorProd = (err: ErrorWithStatusCode, res: Response) => {
  if (err.isOperational) {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    handleResponse(res, HttpStatusCode.NotFound, '系統錯誤，請聯絡系統管理員');
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
  if (process.env.NODE_ENV === 'dev') {
    return resErrorDev(err, res);
  } else if (err.name === 'ValidationError') {
    err.message = '資料欄位未填寫正確，請重新輸入！';
    err.isOperational = true;
    return resErrorProd(err, res);
  }

  resErrorProd(err, res);
};

export { handle404Error, handleErrors, ErrorWithStatusCode };
