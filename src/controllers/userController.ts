import { RequestHandler } from 'express';
import * as userService from '../servers/userService';

const create: RequestHandler = async (req, res) => {
  const user = req.body;
  const Users = await userService.create(user);
  return res.status(201).json({ token: Users });
};

const getAll:RequestHandler = async (_req, _res) => {
  // const user = await userService.getAll();
  // return res.status(200).json(user);
};

export default { create, getAll };