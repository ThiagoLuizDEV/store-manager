const salesMock = {
  id: 1,
  date: "2023-03-22T21:03:36.000Z"
};

const saleMock = [
  {
    productId: 2,
    quantity: 112
  },
];

const saleResult = {
  id: 4,
  itemsSold: [
    {
      productId: 2,
      quantity: 112
    },
  ]
};

const saleErrorQuantity = [
  {
    "productId": 1,
    "quantity": -10,
  },
];

const saleErrorProductId = [
  {
    "productId": 999,
    "quantity": 10,
  },
];

const productsMock = [
  {
  id: 1,
  name: "Produto1",
  },
  {
    id: 2,
    name: "Produto2",
  },
  {
    id: 3,
    name: "Produto3",
  }
];

const productMock = {
  name: "Produto4",
};

const productResult = {
  id: 4,
  name: "Produto4",
};

const productErrorName = {
  name: 12345,
}

module.exports = {
  salesMock,
  saleMock,
  saleResult,
  saleErrorQuantity,
  saleErrorProductId,
  productsMock,
  productMock,
  productResult,
  productErrorName,
};