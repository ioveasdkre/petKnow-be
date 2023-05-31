import { Router } from 'express';
import { authRouter } from './auth.router';
import { courseTagRouter } from './courseTag.router';
import { fakeInformationRouter } from './fakeInformation.router';
import { goldFlowRouter } from './goldFlow.router';
import { homeRouter } from './home.router';
import { itemsRouter } from './items.router';

const apiRouter = Router();

apiRouter.use(authRouter, courseTagRouter, fakeInformationRouter, goldFlowRouter, homeRouter);

export { apiRouter, itemsRouter };
