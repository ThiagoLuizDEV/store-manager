const express = require('express');
const { salesController } = require('../controllers');
// const { validationQuantitySale,
//   validationProductionSale } = require('../middlewares/validationProductSale');

const router = express.Router();

router.post('/', salesController.resultSales);

module.exports = router;