import { RequestHandler } from 'express';
import * as userService from '../servers/userService';

const create: RequestHandler = async (req, res) => {
  const user = req.body;
  const Users = await userService.create(user);
  return res.status(201).json({ token: Users });
};

export default create;