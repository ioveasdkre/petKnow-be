import express, { Router } from 'express';
import { HomeController } from '../controllers/home.controller';
import { handleErrorAsync } from '../middlewares/handle.middleware';

const homeRouter: Router = express.Router();

homeRouter.route('/v1/home').post(handleErrorAsync(HomeController.createPost));

export { homeRouter };
