const express = require('express');
const provinceController = require('../controllers/province.controller');
const router = express.Router();

router
    .route('/')
    .get(provinceController.getAllProvinces);

module.exports = router;
