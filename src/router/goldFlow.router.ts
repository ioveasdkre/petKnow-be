import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';
import { verifyJwtToken, verifyObjectIds } from '../middlewares/verifyType.middewaes';
import { ICreateOrderRequest } from '../viewModels/controllers/goldFlow.viewModel';

const router: Router = express.Router();

router
  .post('/v1/goldFlow/Card', verifyObjectIds, controller.postCard)
  .post('/v1/goldFlow/QueryCoupon', verifyObjectIds, controller.postCoupon)
  .post(
    '/v1/goldFlow/createOrder',
    verifyJwtToken<ICreateOrderRequest>,
    verifyObjectIds,
    controller.createOrder,
  )
  .post('/v1/goldFlow/checkOrder', verifyObjectIds, controller.postCheckOrder);

export { router as goldFlowRouter };
