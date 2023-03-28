const { expect } = require('chai');
const sinon = require('sinon');

const { connection } = require('../../../src/models/connection');
const  productsModel = require('../../../src/models/products.model');
const { test,products, idProduct } = require('../../unit/mocks');

describe('first', () => {
  it('se retorna todos os produtos', async function () {
    const output = [
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

    sinon.stub(connection, 'execute').resolves(products);

    const result = await productsModel.findAll()

    expect(result).to.deep.equal(products[0]);

  })
  it('se retorna um produto', async function () {
    const output = {
      id: 1,
      name: 'Martelo de Thor',
    }
    sinon.stub(connection, 'execute').resolves(products);

    const result = await productsModel.findById(1);
    expect(result).to.deep.equal(output);
  })

  afterEach(sinon.restore);
});
