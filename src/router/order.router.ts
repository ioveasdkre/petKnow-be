import express, { Router } from 'express';
import { OrderController as controller } from '../controllers/order.controller';

const router: Router = express.Router();

router.route('/v1/order').get(controller.getOrders).delete(controller.deleteOrders);

router.route('/v1/order/:orderId').get(controller.getOrder);

export { router as orderRouter };
