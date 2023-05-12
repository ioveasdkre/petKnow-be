import express, { Router } from 'express';
import { FakeInformationController } from '../controllers/fakeInformation.controller';

const fakeInformationRouter: Router = express.Router();

fakeInformationRouter
  .route('/v1/test')
  .get(FakeInformationController.getAllCourseHierarchys)
  .post(FakeInformationController.createCourseHierarchys);

export { fakeInformationRouter };
