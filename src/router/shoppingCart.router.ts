import express, { Router } from 'express';
import { ShoppingCartController as controller } from '../controllers/shoppingCart.controller';
import { verifyJwtToken } from '../middlewares/verifyType.middewaes';

const router: Router = express.Router();

router
  .route('/v1/shoppingCart')
  .get(controller.getShoppingCarts)
  .post(verifyJwtToken, controller.postShoppingCart)
  .delete(controller.deleteShoppingCarts);

router.route('/v1/shoppingCart/:userId').get(controller.getShoppingCartUser);

export { router as shoppingCartRouter };
