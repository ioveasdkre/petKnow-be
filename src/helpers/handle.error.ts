import { Response } from 'express';
import { headers } from './headers';

const handleResponse = (res: Response, statusCode: number, status: string, message: string) => {
  res.status(statusCode);
  res.set(headers);
  res.json({
    status,
    message,
  });
};

export { handleResponse };
