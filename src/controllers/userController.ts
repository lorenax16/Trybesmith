import { RequestHandler } from 'express';
import * as userService from '../servers/userService';

const create: RequestHandler = async (req, res) => {
  const user = req.body;
  const UserCreated = await userService.create(user);
  return res.status(201).json({ token: UserCreated });
};

const getAll = async () => {
};

export default { create, getAll };