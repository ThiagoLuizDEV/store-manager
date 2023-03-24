const models = require('../models');
const validationSale = require('../middlewares/validartionSale');

const getSales = async (productSale) => {
  const { status, message } = await validationSale(productSale);
  if (message) return { status, message };

  const result = await Promise.all(
    productSale.map((product) => models.productsModel.findById(product.productId)),
  );
  if (result.some((res) => res.length === 0)) return { status: 404, message: 'Product not found' };

  const id = await models.saleModel.createSales();
  await Promise.all(productSale.map((product) => models.saleModel.insertSale({ ...product, id })));

  return { result: { id, itemsSold: productSale } };
};

module.exports = { getSales };