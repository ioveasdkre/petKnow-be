import express, { Router } from 'express';
import { GoldFlowController as controller } from '../controllers/goldFlow.controller';

const router: Router = express.Router();

router.post('/v1/goldFlow/Card', controller.postCard);

export { router as goldFlowRouter };
