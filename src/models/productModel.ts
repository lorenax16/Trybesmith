import { RowDataPacket, ResultSetHeader } from 'mysql2';
import Product from '../types/products';
import connection from './connection';

const create = async (product: Product):Promise<Product> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product } as Product;
};

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  return rows as Product[];
};

export { create, getAll };