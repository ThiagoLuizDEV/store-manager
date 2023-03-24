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
const allSales = async () => {
  const [result] = await connection.execute(
    `
      SELECT 
      sales_products.sale_id as saleId, sales_products.product_id as productId,
      sales_products.quantity, sales.date as date
      FROM
      StoreManager.sales_products
      INNER JOIN
      StoreManager.sales ON sales_products.sale_id = sales.id
    `,
  );
  return result;
};

const saleById = async (id) => {
  const [result] = await connection.execute(
    `
    SELECT 
      product_id AS productId, quantity, date
    FROM
      StoreManager.sales_products
        INNER JOIN
      StoreManager.sales ON sales_products.sale_id = sales.id
    WHERE
      sales.id = ?`,
    [id],
  );
  return result;
};

module.exports = {
  createSales,
  insertSale,
  allSales,
  saleById,
};