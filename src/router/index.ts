import { Router } from 'express';
import { itemsRouter } from './items.router';
import { fakeInformationRouter } from './fakeInformation.router';
import { goldFlowRouter } from './goldFlow.router';
import { authRouter } from './auth.router';

const apiRouter = Router();

apiRouter.use(fakeInformationRouter);
apiRouter.use(goldFlowRouter);

export { apiRouter, itemsRouter, authRouter };
