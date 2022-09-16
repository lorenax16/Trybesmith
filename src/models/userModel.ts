import { ResultSetHeader } from 'mysql2';
import User from '../types/users';
import connection from './connection';

const create = async (user: User): Promise<User> => {
  const { username, classe, level, password } = user;
  
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...user }; 
};

const getAll = async () => {
  // const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Users');
  // // return rows as User[];
};

export { create, getAll };