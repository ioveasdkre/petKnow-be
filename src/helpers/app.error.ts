import { NextFunction } from 'express';

interface AppError extends Error {
  statusCode: number;
  status: string;
  isOperational?: boolean;
}

const appError = (httpStatus: number, errMessage: string, next: NextFunction): void => {
  const error: AppError = new Error(errMessage) as AppError;

  error.statusCode = httpStatus;

  error.isOperational = true;

  next(error);
};

export { appError };
