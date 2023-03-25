const chai = require('chai');
const sinon = require('sinon');

chai.use(require('sinon-chai'));

const { expect } = chai;

const productService = require('../../../../src/services/products.services');
const productController = require('../../../../src/controllers/products.controller');
const salesService = require('../../../../src/services/sale.services');
const salesController = require('../../../../src/controllers/sale.controller');

const mock = require('./controller.mock');

describe('Products controller', function () {
  it('return status code 200 and products', async function () {
    const request = {};
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({ type: null, message: mock.productMock });

    await productController.listProducts(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(mock.productMock);
  });

  it('return status code 500 and an empty array', async function () {
    const request = {};
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({ type: 500, message: [] });

    await productController.listProducts(request, response);

    expect(response.status).to.have.been.calledWith(500);
    expect(response.json).to.have.been.calledWith([]);
  });

  it('return status code 200 and a specific product', async function () {
    const request = { params: { id: 1 } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({ type: null, message: mock.productMock });

    await productController.displayProduct(request, response);

    expect(response.status).to.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(mock.productMock);
  });

  it('return status code 404 and an error message', async function () {
    const request = { params: { id: 999 } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({
      type: 'NOT_FOUND',
      message: 'Product not found'
    });

    await productController.displayProduct(request, response);

    expect(response.status).to.been.calledWith(404);
    expect(response.json).to.have.been.calledWith('Product not found');
  });

  it('create a new product', async function () {
    const request = { body: { name: 'productRandom' } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({
      type: null,
      message: { name: "productRandom" },
    });

    await productController.insertProduct(request, response);

    expect(response.status).to.been.calledWith(201);
    expect(response.json).to.have.been.calledWith();
  });

  it('return status code 422 when name is too short', async function () {
    const request = { body: { name: 'prod' } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({
      type: 'UNPROCESSABLE_CONTENT',
      message: '"name" length must be at least 5 characters long',
    });

    await productController.insertProduct(request, response);

    expect(response.status).to.been.calledWith(422);
    expect(response.json).to.have.been.calledWith('"name" length must be at least 5 characters long');
  });

  it('product added and having error 400', async function () {
    const request = { body: { name: '' } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productService).resolves({
      type: 'BAD_REQUEST',
      message: '"name" is required',
    });

    await productController.insertProduct(request, response);

    expect(response.status).to.been.calledWith(400);
    expect(response.json).to.have.been.calledWith('"name" is required');
  });

  describe('saleController', function () {
    it('return status code 200 and sales', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesService).resolves({ message: mock.salesMock });

      await salesController.listSales(request, response);

      expect(response.status).to.have.been.calledWith(200);
      expect(response.json).to.have.been.calledWith(mock.salesMock);
    });

    it('sale specific found', async function () {
      const request = { params: { id: 1 } };
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesService).resolves({ message: mock.salesMock });

      await salesController.displaySale(request, response);

      expect(response.status).to.have.been.calledWith(200);
      expect(response.json).to.have.been.calledWith(mock.salesMock);
    });

    it('error 404', async function () {
      const request = { params: { id: 999 } };
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesService).resolves({ code: 404, message: 'Sale not found' });

      await salesController.displaySale(request, response);

      expect(response.status).to.have.been.calledWith(404);
      expect(response.json).to.have.been.calledWith({ message: 'Sale not found' });
    });

    it('sale created', async function () {
      const request = { body: mock.saleMock };
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesService).resolves(mock.saleResult);

      await salesController.insertSaleAndProduct(request, response);

      expect(response.status).to.have.been.calledWith(201);
      expect(response.json).to.have.been.calledWith();
    });

    it('error 422', async function () {
      const request = { body: mock.saleErrorQuantity };
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesService).resolves(
        { code: 422, message: '"quantity" must be greater than or equal to 1' },
      );

      await salesController.insertSaleAndProduct(request, response);

      expect(response.status).to.have.been.calledWith(422);
      expect(response.json).to.have.been.calledWith();
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});