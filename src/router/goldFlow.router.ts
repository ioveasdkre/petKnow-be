import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';

const router: Router = express.Router();

router
  .post('/v1/goldFlow/Card', controller.postCard)
  .post('/v1/goldFlow/QueryCoupon', controller.postCoupon);

export { router as goldFlowRouter };
