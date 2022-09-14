import { Router } from 'express';
import * as productController from '../controllers/productController';
import userController from '../controllers/userController';

const routers = Router();

routers.post('/products', productController.create);
routers.get('/products', productController.getAll);
routers.post('/users', userController.create);
routers.get('/users', userController.getAll);

export default routers;
