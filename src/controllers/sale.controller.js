const { saleService } = require('../services');

const resultSales = async (req, res) => {
  const { body } = req;
  const { status, message, result } = await saleService.getSales(body);
  if (message) return res.status(status).json({ message });
  return res.status(201).json(result);
};

const listSales = async (req, res) => {
  const { message } = await saleService.findAllSale();
  res.json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { message } = await saleService.findByIdSale(id);
  res.status(message.length === 0 ? 404 : 200)
    .json(message.length === 0 ? { message: 'Sale not found' } : message);
};

module.exports = {
  resultSales,
  listSales,
  getSale,
};
