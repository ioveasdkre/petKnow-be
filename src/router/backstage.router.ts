import express, { Router } from 'express';
import { verifyJwtToken } from '../middlewares/verifyType.middewaes';
import { BackstageController as controller } from '../controllers/backstage.controller';

const router: Router = express.Router();

router.get('/v1/backstage/myClassroom', verifyJwtToken, controller.getMyClassroom);

export { router as backstageRouter };
