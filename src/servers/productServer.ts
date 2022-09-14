import * as productModel from '../models/productModel';
import Product from '../types/products';

const create = async (Products: Product): Promise<Product> => {
  const product = await productModel.create(Products);
  return product;
};
const getAll = async (): Promise<Product[]> => {
  const product = await productModel.getAll();
  return product;
};

export { create, getAll };