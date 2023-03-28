const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const listProducts = async (req, res) => {
  const { message } = await productsService.findAll();
  console.log(message);
    return res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { message } = await productsService.findById(id);

  if (message.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
    return res.status(200).json(message[0]);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message[0]);
};
const deletedProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).json(message[0]);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  deletedProduct,
};