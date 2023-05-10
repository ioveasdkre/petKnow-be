// ref:
// 1. https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { setSecurityHeaders } from './config/contentSecurityPolicy';
import { itemsRouter, homeRouter, authRouter } from './router/index';
import swaggerSpec from '../swagger_output.json';
import {
  handle404Error,
  handleErrors,
  handleUncaughtException,
  handleUnhandledRejection,
} from './middlewares/error.middleware';

export const app = express();

app.use(setSecurityHeaders);

if (process.env.ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(express.json());
app.use(homeRouter);
app.use('/items', itemsRouter);
app.use('/api', authRouter);

app.get('/', function (_req, res) {
  res.json('PetKnow');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(handle404Error);

app.use(handleErrors);

// 補捉程式錯誤
process.on('uncaughtException', handleUncaughtException);

// 補捉未處理的 catch
process.on('unhandledRejection', handleUnhandledRejection);

export default app;
