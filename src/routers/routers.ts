import { Router } from 'express';
import * as productController from '../controllers/productController';

const routers = Router();

routers.post('/products', productController.create);
routers.get('/products', productController.getAll);

export default routers;
