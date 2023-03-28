const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.services');
const { test1, test, products, idProduct } = require('../../unit/mocks');

describe('third', () => {
   it('retorna todos os produtos', async function () {
     sinon.stub(productsModel, 'findAll').resolves(products);
     const result = await productsService.findAll();
     expect(result).to.be.deep.equal(test1);
  })
  it('retorna o produto baseado no id', async function () {
     sinon.stub(productsModel, 'findById').resolves(idProduct);
     const result = await productsService.findById(1);
     console.log(result);
     expect(result).to.be.deep.equal(test);
  })
  afterEach(sinon.restore);
});