const productMock = {
  id: 1,
  name: 'Martelo de Thor',
};

const salesMock = [
  {
    "date": "2023-03-23T14:52:15.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2023-03-23T14:52:15.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const saleMock = [
  {
    productId: 2,
    quantity: 112
  },
];
const saleErrorQuantity = [
  {
    productId: 4,
    quantity: -10
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
module.exports = {
  productMock,
  salesMock,
  saleMock,
  saleErrorQuantity,
  saleResult,
};