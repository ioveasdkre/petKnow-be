import express, { Router } from 'express';
import { FakeInformationController as controller } from '@src/controllers/fakeInformation.controller';

const router: Router = express.Router();

router
  .route('/test/CourseHierarchy')
  .get(controller.getAllCourseHierarchys)
  .post(controller.createCourseHierarchys);

router.route('/test/CourseHierarchy/insertMany').get(controller.generateData.bind(controller));

router.route('/test/User').get(controller.getAllUserId);

export { router as fakeInformationRouter };
