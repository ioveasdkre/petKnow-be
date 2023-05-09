import express, { Router } from 'express';
import { HomeController } from '../controllers/home.controller';
// import { handleErrorAsync } from '../middlewares/handle.middleware';

const homeRouter: Router = express.Router();

homeRouter.route('/v1/home').get(HomeController.getAllCoures).post(HomeController.createCoures);

export { homeRouter };
