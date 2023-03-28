const { expect } = require('chai');
const chai = require('chai')
const sinon = require('sinon');
const sinonChai = require('sinon-chai')
const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.services');
const { test2,products } = require('../../unit/mocks');

chai.use(sinonChai)

describe('second', () => {
   it('retorna todos os produtos', async function () {
    const response = {}
     const require = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

     sinon.stub(productsService, 'findAll').resolves({ status: 200, message: products[0] });

     const test = await productsController.listProducts(require, response);
     expect(response.status).to.have.been.calledWith(200)
  })
  it('retorna o produto baseado no id', async function () {
    const response = {}
    const require = { params: { id: 1 } };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'findById').resolves({ status: 200, message: products[0] });

    const test = await productsController.getProduct(require, response);
    expect(response.status).to.have.been.calledWith(200)
  })
  afterEach(sinon.restore);
});