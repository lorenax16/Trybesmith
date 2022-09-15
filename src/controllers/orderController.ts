import { RequestHandler } from 'express';
import getAllServices from '../servers/orderSercive';

const getAll:RequestHandler = async (_req, res) => {
  const product = await getAllServices();
  return res.status(200).json(product);
};

export default getAll;