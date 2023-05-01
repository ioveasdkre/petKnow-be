// ref: 
// 1. https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { itemsRouter } from './router/items.router';
import { authRouter } from './router/auth.router';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config()
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


dotenv.config();

const app = express();
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

let todos: string[] = ['todo 1', 'todo 2'];

app.get('/', function (req, res) {
	res.json('PetKnow');
});


const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server started on port 8000'));

module.exports = app;


