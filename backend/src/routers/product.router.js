const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

router
    .route('/')
    .get(productController.getProductsByFilter)
    .post(productController.createProduct);
router
    .route('/:id')
    .put(productController.updateProduct);

module.exports = router;
