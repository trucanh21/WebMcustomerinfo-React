
const express = require('express');
const typeContractController = require('../controllers/typeContract.controller');
const router = express.Router();

router
    .route('/')
    .get(typeContractController.getTypeContracts)

module.exports = router;