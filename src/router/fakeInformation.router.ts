import express, { Router } from 'express';
import { FakeInformationController as controller } from '../controllers/fakeInformation.controller';

const router: Router = express.Router();

router
  .get('/v1/fakeInformation/all', controller.getAllCourseHierarchys)
  .get('/v1/fakeInformation/generateData', controller.generateData)
  .post('/v1/fakeInformation/add', controller.createCourseHierarchys);

router.get('/v1/fakeInformation/getAllUserId', controller.getAllUserId);

export { router as fakeInformationRouter };
