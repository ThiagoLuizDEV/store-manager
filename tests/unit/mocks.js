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


module.exports = {
  products,
  idProduct,
  test,
  test1,
  test2,
}