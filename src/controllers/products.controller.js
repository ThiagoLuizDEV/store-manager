const { productsService } = require('../services');

const listProducts = async (req, res) => {
  const { message } = await productsService.findAll();

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
  const { message } = await productsService.createProduct(name);
  return res.status(201).json(message[0]);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
};