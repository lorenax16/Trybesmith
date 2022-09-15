import getAllModel from '../models/orderModel';
import Order from '../types/orders';

const getAllServices = async (): Promise<Order[]> => {
  const products = await getAllModel();
  return products;
};

export default getAllServices;
