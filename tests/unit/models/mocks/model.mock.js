const productsMock = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
];

const previewProductsMock = [
  {
    name: "Produto4",
  },
];

const salesMock = [
  {
    "id": 1,
    "date": "2023-03-22T21:03:36.000Z"
  }
];

const previewSalesMock = [
  {
    "productId": 2,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 12
  }
];

module.exports = {
  productsMock,
  insertionProductsMock,
  previewProductsMock,
  salesMock,
  previewSalesMock,
};