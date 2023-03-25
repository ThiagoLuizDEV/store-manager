const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const productService = require('../../../../src/services/products.service');
const productModel = require('../../../../src/models/products.model');
const salesService = require('../../../../src/services/sale.services');
const salesModel = require('../../../../src/models/sale.model');
const mock = require('./service.mock');


describe('productService', function () {
  it('listed user', async function () {
    sinon.stub(productModel).resolves(mock.productsMock);

    const result = await productService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(mock.productsMock);
  });

  it('specific listed user', async function () {
    sinon.stub(productModel).resolves(mock.productsMock);

    const result = await productService.findSpecific(1);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(mock.productsMock);
  });

  it('specific user no listed', async function () {
    sinon.stub(productModel).resolves(null);

    const result = await productService.findSpecific(999);

    expect(result.type).to.be.equal('NOT_FOUND');
    expect(result.message).to.be.deep.equal({ message: 'Product not found' });
  });

  it('product created', async function () {
    sinon.stub(productModel).resolves(4);

    const result = await productService.addProduct(mock.productMock);

    console.log('result', result);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(mock.productResult);
  });

  it('product name created with error', async function () {
    sinon.stub(productModel).resolves(null);

    const result = await productService.addProduct(mock.productErrorName);

    expect(result.type).to.be.equal('BAD_REQUEST');
    expect(result.message).to.be.deep.equal('"name" must be a string');
  });

  afterEach(function () {
    sinon.restore();
  });
});
describe('saleService', function () {
  it('sale especific', async function () {
    sinon.stub(salesModel).resolves(mock.salesMock);

    const result = await salesService.findSpecific(1);

    expect(result).to.be.deep.equal({ message: mock.salesMock });
  });

  it('specific sale not found', async function () {
    sinon.stub(salesModel).resolves([]);

    const result = await salesService.findSpecific(999);

    expect(result).to.be.deep.equal({ code: 404, message: 'Sale not found' });
  });

  it('sale created', async function () {
    sinon.stub(salesModel).resolves(4);

    const result = await salesService.addSaleAndProduct(mock.saleMock);

    expect(result.message).to.be.deep.equal(mock.saleResult);
  });

  it('sale quantity created with error', async function () {
    sinon.stub(salesModel).resolves(null);

    const result = await salesService.addSaleAndProduct(mock.saleErrorQuantity);

    expect(result.code).to.be.equal(422);
    expect(result.message).to.be.deep.equal('"quantity" must be greater than or equal to 1');
  });

  it('retorna um erro ao tentar criar uma sale com um productId nao existente', async function () {
    sinon.stub(salesModel).resolves(null);

    const result = await salesService.addSaleAndProduct(mock.saleErrorProductId);

    expect(result.code).to.be.equal(404);
    expect(result.message).to.be.deep.equal('Product not found');
  });

  afterEach(function () {
    sinon.restore();
  });
});