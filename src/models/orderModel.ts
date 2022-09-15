import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Order from '../types/orders';

const getAllModel = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON 
    o.id = p.orderId GROUP BY o.id ORDER BY o.userId`, 
  );
  return result as Order[];
};
// https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
// JSON_ARRAYAGG()Retorne o conjunto de resultados como uma única matriz JSON
// product e um array de produtos
export default getAllModel;