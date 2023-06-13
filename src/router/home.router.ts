import express, { Router } from 'express';
import { HomeController as controller } from '../controllers/home.controller';

const router: Router = express.Router();

router
  .get('/v1/home', controller.getIndex)
  .get('/v1/home/search', controller.getSearch)
  .get('/v1/home/:courseId', controller.getVisitorCourseDetails);

export { router as homeRouter };
