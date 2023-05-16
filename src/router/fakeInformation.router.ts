import express, { Router } from 'express';
import { FakeInformationController } from '../controllers/fakeInformation.controller';
import { FakeInformationService } from '../services/fakeInformation.service';

const router: Router = express.Router();
const service = new FakeInformationService();
const controller = new FakeInformationController(service);

router
  .route('/test/CourseHierarchy')
  .get(controller.getAllCourseHierarchys)
  .post(controller.createCourseHierarchys);

router.route('/test/CourseHierarchy/insertMany').get(controller.generateData.bind(controller));

router.route('/test/User').get(controller.getAllUserId);

export { router as fakeInformationRouter };
