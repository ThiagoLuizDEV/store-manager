const { connection } = require('./connection');

const createSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (now());',
  );
  return insertId;
};

const insertSale = async ({ id, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (? ,? ,?)',
    [id, productId, quantity],
  );
};

module.exports = {
  createSales,
  insertSale,
};