const schema = require('./validationProductSale');

const errorMessages = {
  '"productId" is required': { status: 400, message: '"productId" is required' },
  '"quantity" is required': { status: 400, message: '"quantity" is required' },
  '"quantity" must be greater than or equal to 1': {
    status: 422, message: '"quantity" must be greater than or equal to 1',
  },
};

const validationSale = (param) => {
  const { error } = schema.validate(param);
  if (error && error.message in errorMessages) {
    return errorMessages[error.message];
  }
  return { status: 201 };
};

module.exports = validationSale;