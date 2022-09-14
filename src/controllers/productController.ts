import { RequestHandler } from 'express';
import * as ProductServer from '../servers/productServer';
import Product from '../types/products';

const create: RequestHandler = async (req, res) => {
  const product = req.body as Product;
  const productCreated: Product = await ProductServer.create(product);
  return res.status(201).json(productCreated);
};

const getAll:RequestHandler = async (_req, res) => {
  const product = await ProductServer.getAll();
  return res.status(200).json(product);
};

export { create, getAll };