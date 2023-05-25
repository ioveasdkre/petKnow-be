import express, { Router } from 'express';
import { FakeInformationController as controller } from '../controllers/fakeInformation.controller';

const router: Router = express.Router();

router
  .get('/v1/fakeInformation/getAllUserId', controller.getAllUserId)
  .get('/v1/fakeInformation/getAllCourseHierarchys', controller.getAllCourseHierarchys)
  .get('/v1/fakeInformation/getAllCoupons', controller.getAllCoupons)
  .get('/v1/fakeInformation/generateCourseHierarchysData', controller.generateCourseHierarchysData)
  .get('/v1/fakeInformation/generateCouponsData', controller.generateCouponsData)
  .post('/v1/fakeInformation/createCourseHierarchys', controller.createCourseHierarchys);

export { router as fakeInformationRouter };