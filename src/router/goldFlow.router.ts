import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';
import { verifyJwtToken, verifyObjectIds } from '../middlewares/verifyType.middewaes';
import {
  ICreateUserCartCourse,
  ICreateUserCartCoupon,
  ICreateOrderRequest,
  IPostCheckRequest,
} from '../viewModels/controllers/goldFlow.viewModel';

const router: Router = express.Router();

router
  .get('/v1/goldFlow/userCart', verifyJwtToken, controller.getUserCart)
  .post(
    '/v1/goldFlow/userCartCourse',
    verifyJwtToken<ICreateUserCartCourse>,
    controller.saveOrUpdateUserCartCourse,
  )
  .post(
    '/v1/goldFlow/userCartCoupon',
    verifyJwtToken<ICreateUserCartCoupon>,
    controller.saveOrUpdateUserCartCoupon,
  )
  .post('/v1/goldFlow/visitorsCart', verifyObjectIds, controller.postVisitorsCart)
  .post(
    '/v1/goldFlow/createOrder',
    verifyJwtToken<ICreateOrderRequest>,
    verifyObjectIds,
    controller.createOrder,
  )
  .post('/v1/goldFlow/checkOrder', verifyJwtToken<IPostCheckRequest>, controller.postCheckOrder);

export { router as goldFlowRouter };
