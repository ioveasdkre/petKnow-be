import express, { Router } from 'express';
import { ShoppingCartController as controller } from '../controllers/shoppingCart.controller';
import { verifyJwtToken } from '../middlewares/verifyType.middewaes';

const router: Router = express.Router();

router
  .route('/v1/Caghinopprst')
  .get(controller.getShoppingCarts)
  .post(verifyJwtToken, controller.postShoppingCart);

export { router as shoppingCartRouter };
