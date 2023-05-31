import express, { Router } from 'express';
import { CourseTagController as controller } from '../controllers/courseTag.controller';

const router: Router = express.Router();

router.get('/v1/courseTag/getAll', controller.getAll);

export { router as courseTagRouter };
