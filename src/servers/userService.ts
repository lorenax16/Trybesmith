import * as userModel from '../models/userModel';
import User from '../types/users';
import createToken from '../middleware/token';

const create = async (Users: User): Promise<string> => {
  const data = await userModel.create(Users);
  const token2 = createToken(data);
  return token2;
};
const getAll = async () => {
  // const product = await userModel.getAll();
  // return product;
};

export { create, getAll };