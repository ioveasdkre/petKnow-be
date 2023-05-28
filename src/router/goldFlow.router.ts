import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';
import { isValidObjectIds } from '../middlewares/verifyType.middewaes';

const router: Router = express.Router();

router
  .post('/v1/goldFlow/Card', isValidObjectIds, controller.postCard)
  .post('/v1/goldFlow/QueryCoupon', isValidObjectIds, controller.postCoupon);

export { router as goldFlowRouter };
