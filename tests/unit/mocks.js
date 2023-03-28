const products = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América"
      }
    ];


const idProduct = {
  "id": 1,
  "name": "Martelo de Thor"
};

const test = {
  "message": {
    "id": 1,
    "name": "Martelo de Thor"
  },
  "type": null
};

const test1 = {
  "message": [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    },
  ],
  "type": null,
};
  
const test2 = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const saleTest =  [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-27T20:41:55.000Z"
  },
  {
    "saleId": 1,
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-27T20:41:55.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2023-03-27T20:41:55.000Z"
  }
]

const saleTestService = {
  "message": [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-27T20:41:55.000Z"
  },
  {
    "saleId": 1,
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-27T20:41:55.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2023-03-27T20:41:55.000Z"
  }
]
}
const test3 = [
  {
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-28T15:56:35.000Z"
  },
  {
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-28T15:56:35.000Z"
  }
]

const messageSaleId = {
  "message": [
    {
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-28T15:56:35.000Z"
  },
  {
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-28T15:56:35.000Z"
  }
  ]
}


module.exports = {
  products,
  idProduct,
  test,
  test1,
  test2,
  saleTest,
  saleTestService,
  test3,
  messageSaleId,
}