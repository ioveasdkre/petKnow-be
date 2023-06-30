import express, { Router } from 'express';
import { PlatformCouponsController as controller } from '../controllers/platformCoupons.controller';

const router: Router = express.Router();

router.route('/v1/platformCoupons').get(controller.getAllPlatformCoupons);

router
  .route('/v1/platformCoupons/:platformCouponId')
  .get(controller.getPlatformCoupon)
  .put(controller.putPlatformCoupon);

export { router as platformCouponsRouter };
