const { expect } = require('chai');
const sinon = require('sinon');

const { connection } = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const salesModel = require('../../../src/models/sale.model')
const { saleTest ,test,products, idProduct } = require('../../unit/mocks');

describe('first', () => {
  it('se retorna todos os produtos', async function () {
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

  it('se retorna todos os sales', async function() {
    sinon.stub(connection, 'execute').resolves(saleTest);
    
    const result = await salesModel.allSales()
    expect(result).to.deep.equal(saleTest[0])
  })
  it('se retorna um sale', async function () {
    sinon.stub(connection, 'execute').resolves(saleTest);

    const result = await salesModel.saleById(1);
    expect(result).to.deep.equal(saleTest[0]);
  })
  afterEach(sinon.restore);
});
