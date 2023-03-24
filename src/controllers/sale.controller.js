const { saleService } = require('../services');

const resultSales = async (req, res) => {
  const { body } = req;
  const { status, message, result } = await saleService.getSales(body);
  if (message) return res.status(status).json({ message });
  return res.status(201).json(result);
};

module.exports = {
  resultSales,
};
