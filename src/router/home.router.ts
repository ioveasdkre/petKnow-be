import express, { Router } from 'express';
import { HomeController } from '../controllers/home.controller';

const HomeRouter: Router = express.Router();

HomeRouter.route('/posts').get(HomeController.getPosts);

export { HomeRouter };
