const Joi = require('joi');

const validations = Joi.object({
  productId: Joi.required().messages({
    'any.required': '"productId" is required',
  }),
  quantity: Joi.number().integer().min(1).required()
.messages({
    'any.required': '"quantity" is required',
    'number.min': '"quantity" must be greater than or equal to 1',
  }),
});
const schemaJoi = Joi.array().items(validations);

module.exports = schemaJoi;