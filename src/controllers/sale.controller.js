const { saleService } = require('../services');
const errorMap = require('../utils/errorMap');

const resultSales = async (req, res) => {
  const { body } = req;
  const { type, message, result } = await saleService.getSales(body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(result);
};

module.exports = {
  resultSales,
};
