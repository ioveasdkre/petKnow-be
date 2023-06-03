import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';
import { verifyJwtToken, verifyObjectIds } from '../middlewares/verifyType.middewaes';
import { ICreateOrderRequest, IPostCheckRequest } from '../viewModels/controllers/goldFlow.viewModel';

const router: Router = express.Router();

router
  .post('/v1/goldFlow/Cart', verifyObjectIds, controller.postCart)
  .post(
    '/v1/goldFlow/createOrder',
    verifyJwtToken<ICreateOrderRequest>,
    verifyObjectIds,
    controller.createOrder,
  )
  .post('/v1/goldFlow/checkOrder',verifyJwtToken<IPostCheckRequest>, controller.postCheckOrder);

export { router as goldFlowRouter };
