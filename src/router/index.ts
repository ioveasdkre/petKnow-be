import { Router } from 'express';
import { env } from '../config/env';
import { authRouter } from './auth.router';
import { courseTagRouter } from './courseTag.router';
import { fakeInformationRouter } from './fakeInformation.router';
import { goldFlowRouter } from './goldFlow.router';
import { homeRouter } from './home.router';
import { itemsRouter } from './items.router';
import { orderRouter } from './order.router';
import { shoppingCartRouter } from './shoppingCart.router';

const apiRouter = Router();

if (env !== 'prod') {
  apiRouter.use(fakeInformationRouter);
}

apiRouter.use(authRouter, courseTagRouter, goldFlowRouter, homeRouter, orderRouter, shoppingCartRouter);

export { apiRouter, itemsRouter };
