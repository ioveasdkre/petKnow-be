// ref:
// 1. https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import { itemsRouter, homeRouter, authRouter } from './router/index';
import swaggerSpec from '../swagger_output.json';
import {
  handle404Error,
  handleErrors,
  handleUncaughtException,
  handleUnhandledRejection,
} from './middlewares/error.middleware';

export const app = express();

const allowedOrigins =
  process.env.ENV === 'prod'
    ? ['https://petknow.netlify.app']
    : ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:5173'];

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  }),
);

app.use(cookieParser());

app.use(helmet());
app.use(express.json());
app.use(homeRouter);
app.use('/items', itemsRouter);
// app.use('/api', itemsRouter);
app.use('/api', authRouter);

app.get('/', function (_req, res) {
  res.json('PetKnow');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(handle404Error);

app.use(handleErrors);

// 補捉程式錯誤
process.on("uncaughtException", handleUncaughtException);

// 補捉未處理的 catch
process.on("unhandledRejection", handleUnhandledRejection);

export default app;
