// ref:
// 1. https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import { itemsRouter } from './router/items.router';
import { authRouter } from './router/auth.router';
import swaggerSpec from '../swagger_output.json';
import { handle404Error, handleErrors } from './middlewares/errors.middleware';

export const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080'],
  }),
);
app.use(cookieParser());

app.use(helmet());
app.use(express.json());
app.use('/items', itemsRouter);
// app.use('/api', itemsRouter);
app.use('/api', authRouter);

app.get('/', function (_req, res) {
  res.json('PetKnow');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(handle404Error);

app.use(handleErrors);

export default app;
