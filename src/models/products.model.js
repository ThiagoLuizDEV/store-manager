const { connection } = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const createProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) values (?)',
    [product],
  );
  return insertId;
};

const deleteProductById = async (productId) => {
    const [result] = await connection.execute(
      'DELETE FROM StoreManager.products WHERE id = ?', [productId],
    );
    return result;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  deleteProductById,
};