const express = require('express');

const ProductsAPIController = require('../../controllers/api/productsAPIController');

const router = express.Router();

router.get('/', ProductsAPIController.list);

router.get('/:id', ProductsAPIController.detail);

module.exports = router;