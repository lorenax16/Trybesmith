import productModel from '../models/productModel';
import Product from '../types/products';

const create = async (Products: Product): Promise<Product> => {
  const product = await productModel(Products);
  return product;
};
const getAll = () => {

};

export { create, getAll };