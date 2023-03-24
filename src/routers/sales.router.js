const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.post('/', salesController.resultSales);

router.get('/', salesController.listSales);

router.get('/:id', salesController.getSale);

module.exports = router;