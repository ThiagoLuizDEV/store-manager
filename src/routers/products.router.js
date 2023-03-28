const express = require('express');
const { productsController } = require('../controllers');
const { validationProduct } = require('../middlewares/validationProduct');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', productsController.getProduct);

router.post('/', validationProduct, productsController.createProduct);

router.delete('/:id', productsController.deletedProduct);

module.exports = router;