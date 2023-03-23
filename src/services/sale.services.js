const { saleModel } = require('../models');

const getSales = async (productSale) => {
  const id = await saleModel.createSales();
  await Promise.all(
    productSale.map((product) => saleModel.insertSale({ ...product, id })),
  );
  return {
    result: {
      id,
      itemsSold: productSale,
    },
  };
};

module.exports = {
  getSales,
};