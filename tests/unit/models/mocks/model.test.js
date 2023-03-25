const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../../src/models/connection');
const productModel = require('../../../../src/models/products.model');
const salesModel = require('../../../../src/models/sale.model');
const mock = require('./model.mock');

describe('productsModel', function () {
  it('products recupered', async function () {
    sinon.stub(connection).resolves([mock.productsMock]);

    const result = await productModel.findAll();

    expect(result).to.be.deep.equal(mock.productsMock);
  });

  it('product found', async function () {
    sinon.stub(connection).resolves([mock.productsMock]);

    const result = await productModel.findSpecific(1);

    expect(result).to.be.deep.equal(mock.productsMock[0]);
  });

  it('product created', async function () {
    sinon.stub(connection).resolves([{ insertId: 4 }]);

    const result = await productModel.addProduct(mock.previewProductsMock);

    expect(result).to.be.equal(4);
  });

  afterEach(function () {
    sinon.restore();
  });
});
describe('SaleModel', function () {
  it('sale found', async function () {
    sinon.stub(connection).resolves([mock.salesMock ]);

    const result = await salesModel.findSpecific(1);

    expect(result).to.be.deep.equal([mock.salesMock[0]]);
  });

  it('sale criated', async function () {
    sinon.stub(connection).resolves([{ insertId: 4 }]);

    const result = await salesModel.addSaleAndProduct(mock.previewSalesMock);

    expect(result).to.be.equal(4);
  });

  afterEach(function () {
    sinon.restore();
  });
});