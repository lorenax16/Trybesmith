import { Router } from 'express';
import * as productController from '../controllers/productController';
import create from '../controllers/userController';
import getAll from '../controllers/orderController';

const routers = Router();

routers.post('/products', productController.create);
routers.get('/products', productController.getAll);
routers.post('/users', create);
routers.get('/orders', getAll);

export default routers;
