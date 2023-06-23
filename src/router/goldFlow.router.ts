import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';
import { verifyJwtToken, verifyObjectIds } from '../middlewares/verifyType.middewaes';
import {
  ISaveOrUpdateUserCartCourse,
  IUpdateUserCartCourse,
  ISaveOrUpdateUserCartCoupon,
  IPostCheckRequest,
} from '../viewModels/controllers/goldFlow.viewModel';

const router: Router = express.Router();

router
  .get('/v1/goldFlow/userCart', verifyJwtToken, controller.getUserCart)
  .post(
    '/v1/goldFlow/userCartCourse',
    verifyJwtToken<ISaveOrUpdateUserCartCourse>,
    controller.saveOrUpdateUserCartCourse,
  )
  .delete(
    '/v1/goldFlow/userCartCourse',
    verifyJwtToken<IUpdateUserCartCourse>,
    controller.deleteUserCartCourse,
  )
  .post(
    '/v1/goldFlow/userCartCoupon',
    verifyJwtToken<ISaveOrUpdateUserCartCoupon>,
    controller.saveOrUpdateUserCartCoupon,
  )
  .delete('/v1/goldFlow/userCartCoupon', verifyJwtToken, controller.deleteUserCartCoupon)
  .post('/v1/goldFlow/visitorsCart', verifyObjectIds, controller.postVisitorsCart)
  .get('/v1/goldFlow/validCoupon', controller.getValidCoupon)
  .post(
    '/v1/goldFlow/createOrder',
    verifyJwtToken,
    controller.createOrder,
  )
  .post('/v1/goldFlow/checkOrder', verifyJwtToken<IPostCheckRequest>, controller.postCheckOrder)
  .post('/v1/goldFlow/notify', controller.postNotify);

export { router as goldFlowRouter };
