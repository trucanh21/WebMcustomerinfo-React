const express = require('express');
const contractController = require('../controllers/contract.controller');
const router = express.Router();

router
    .route('/')
    .get(contractController.getContractsByFilter)
    .post(contractController.createContract);
router
    .route('/:id')
    .put(contractController.updateContractInvoice);

router
    .route('/maintenance/:id')
    .put(contractController.updateContractMaintenance);

module.exports = router;
