const { productsModel } = require('../models');

const findAll = async () => {
  const allProducts = await productsModel.findAll();
  return { type: null, message: allProducts };
};

const findById = async (productId) => {
  const productById = await productsModel.findById(productId);
  return { type: null, message: productById };
};

const createProduct = async (product) => {
  const newProduct = await productsModel.createProduct(product);
  const productById = await productsModel.findById(newProduct);
  return { type: null, message: productById };
};
const deleteProduct = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return false;
  await productsModel.deleteProductById(productId);
  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  deleteProduct,
};