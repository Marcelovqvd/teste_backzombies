import { Router } from 'express';

import SurvivorController from './app/controllers/SurvivorController';
import ItemController from './app/controllers/ItemController';

const routes = new Router();

routes.post('/survivor', SurvivorController.store);
routes.post('/item', ItemController.store);

export default routes;
