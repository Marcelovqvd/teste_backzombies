import { Router } from 'express';

import SurvivorController from './app/controllers/SurvivorController';

const routes = new Router();

routes.post('/survivor', SurvivorController.store);
routes.put('/survivor', SurvivorController.update);

export default routes;
