// ref: 
// 1. https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { itemsRouter } from './router/items.router';
import { authRouter } from './router/auth.router';

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use('/items', itemsRouter);
app.use('/auth', authRouter);

let todos: string[] = ['todo 1', 'todo 2'];

app.get('/', function (req, res) {
	res.json('PetKnow');
});

// 取得所有 todo
app.get('/todos', (req, res) => {
	res.json(todos);
});
// app.post('/add', (req, res) => {
// 	console.log('req.body: ', req.body);
// 	res.json(req.body);
// });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server started on port 8000'));

module.exports = app;


