import { Router } from 'express';

import SurvivorController from './app/controllers/SurvivorController';
import InventoryController from './app/controllers/InventoryController';
import ItemController from './app/controllers/ItemsController';

const routes = new Router();

routes.post('/survivor', SurvivorController.store);
routes.put('/survivor', SurvivorController.update);

routes.post('/inventory', InventoryController.store);
routes.put('/inventory', InventoryController.update);

routes.post('/items', ItemController.store);
routes.put('/items', ItemController.update);

export default routes;
