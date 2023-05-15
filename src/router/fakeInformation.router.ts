import express, { Router } from 'express';
import { FakeInformationController } from '../controllers/fakeInformation.controller';

const fakeInformationRouter: Router = express.Router();

fakeInformationRouter
  .route('/test/CourseHierarchy')
  .get(FakeInformationController.getAllCourseHierarchys)
  .post(FakeInformationController.createCourseHierarchys);

fakeInformationRouter.route('/test/CourseHierarchy/insertMany').get(FakeInformationController.generateData);

fakeInformationRouter.route('/test/User').get(FakeInformationController.getAllUserId);

export { fakeInformationRouter };
