import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';
import { verifyObjectIds } from '../middlewares/verifyType.middewaes';

const router: Router = express.Router();

router
  .post('/v1/goldFlow/Card', verifyObjectIds, controller.postCard)
  .post('/v1/goldFlow/QueryCoupon', verifyObjectIds, controller.postCoupon);

export { router as goldFlowRouter };
