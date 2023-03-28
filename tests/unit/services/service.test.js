const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const salesModel = require('../../../src/models/sale.model')
const productsService = require('../../../src/services/products.services');
const saleService = require('../../../src/services/sale.services')
const { saleTestService, saleTest, test1, test, products, idProduct, test3, messageSaleId } = require('../../unit/mocks');

describe('third', () => {
   it('retorna todos os produtos', async function () {
     sinon.stub(productsModel, 'findAll').resolves(products);
     const result = await productsService.findAll();
     expect(result).to.be.deep.equal(test1);
  })
  it('retorna o produto baseado no id', async function () {
     sinon.stub(productsModel, 'findById').resolves(idProduct);
     const result = await productsService.findById(1);
     expect(result).to.be.deep.equal(test);
  })
  it('retorna todos os sales', async function () {
     sinon.stub(salesModel, 'allSales').resolves(saleTest);
     const result = await saleService.findAllSale();
     expect(result).to.be.deep.equal(saleTestService);
  })
  it('retorna o sale baseado no id', async function () {
     sinon.stub(salesModel, 'saleById').resolves(test3);
     const result = await saleService.findByIdSale(1);
     expect(result).to.be.deep.equal(messageSaleId);
  })
  afterEach(sinon.restore);
});