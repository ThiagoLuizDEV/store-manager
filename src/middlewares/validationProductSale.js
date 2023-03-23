const validationQuantitySale = (req, res, next) => {
  const { quantity } = req.body;
  if (quantity) return res.status(400).json({ message: '"quantity" is required' });

  if (quantity.length <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validationProductionSale = (req, res, next) => {
  const { productId } = req.body;

  if (productId) return res.status(400).json({ message: '"productId" is required' });

  if (!productId) return res.status(404).json({ message: 'Product not found' });

  if (productId === undefined) return res.status(404).json({ message: 'Product not found' });

  next();
};

module.exports = {
  validationProductionSale,
  validationQuantitySale,
};