import { FieldPacket, RowDataPacket } from "mysql2";
import { connection } from "./connection";

interface IProduct extends RowDataPacket{
  insertId: number
}

export const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products
};

export const createProduct = async (product) => {
  const { title, price, description } = product;

  const [createdTask] = await connection.execute<IProduct[]>('INSERT INTO products (title, price, description) values (?,?,?)', [title, price, description])

  return { insertId: createdTask.insertId };
};

export const getProduct = async (id) => {
  const [getProduct] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);

  return getProduct
};

export const deleteProduct = async (id) => {
  const removedProduct = await connection.execute('DELETE FROM products WHERE id = ?', [id]);
  return removedProduct
};

export const updateProduct = async (id, product) => {
  const { title, price, description } = product;
  const [updatedProduct] = await connection.execute('UPDATE products SET title = ?, price = ?, description = ? WHERE id = ?', [title, price, description, id])
  return updatedProduct;
}