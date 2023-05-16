import express, { Router } from 'express';
import { FakeInformationController } from '../controllers/fakeInformation.controller';

const fakeInformationRouter: Router = express.Router();
const fakeInformationController = new FakeInformationController();

fakeInformationRouter
  .route('/test/CourseHierarchy')
  .get(fakeInformationController.getAllCourseHierarchys)
  .post(fakeInformationController.createCourseHierarchys);

fakeInformationRouter
  .route('/test/CourseHierarchy/insertMany')
  .get(fakeInformationController.generateData);

fakeInformationRouter.route('/test/User').get(fakeInformationController.getAllUserId);

export { fakeInformationRouter };
