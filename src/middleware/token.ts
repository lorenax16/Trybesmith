// const jwt = require('jsonwebtoken');
import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import user from '../types/users';

dotenv.config();
// require('dotenv').config();

const { JWT_SECRET } = process.env as { JWT_SECRET: jwt.Secret };
const JWT_OPTIONS: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (data: user) => {
  const token = jwt.sign({ data }, JWT_SECRET, JWT_OPTIONS);
  return token;
};

export default createToken;