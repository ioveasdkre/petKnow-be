import express, { Router } from 'express';
import { CourseTagController as controller } from '../controllers/courseTag.controller';

const router: Router = express.Router();

router.get('/v1/courseTag', controller.getCourseTags);

export { router as courseTagRouter };
