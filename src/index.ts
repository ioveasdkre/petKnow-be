// ref:
// 1. https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
// import { setSecurityHeaders } from './config/contentSecurityPolicy';
import cors from 'cors';
import { apiRouter, itemsRouter } from './router/index';
import {
  handle404Error,
  handleErrors,
  handleUncaughtException,
  handleUnhandledRejection,
} from './middlewares/error.middleware';
import swaggerSpec from '../swagger_output.json';

export const app = express();

// todo: fix this back correctly.
// app.use(setSecurityHeaders);
app.use(cors());

if (process.env.ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(express.json());

app.use(apiRouter);
app.use('/items', itemsRouter);
// app.use('/api', itemsRouter);

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
