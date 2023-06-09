import express, { Router } from 'express';
import { ShoppingCartController as controller } from '../controllers/shoppingCart.controller';
import { verifyJwtToken } from '../middlewares/verifyType.middewaes';

const router: Router = express.Router();

router
  .route('/v1/ShoppingCart')
  .get(controller.getShoppingCarts)
  .post(verifyJwtToken, controller.postShoppingCart)
  .delete(controller.deleteShoppingCarts);

export { router as shoppingCartRouter };
