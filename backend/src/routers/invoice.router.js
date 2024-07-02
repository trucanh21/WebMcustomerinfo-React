const express = require('express');
const invoiceController = require('../controllers/invoice.controller');
const router = express.Router();

router
    .route('/')
    .get(invoiceController.getInvoicesByFilter)
    .post(invoiceController.createInvoice);
router
    .route('/:id')
    .put(invoiceController.updateInvoice);

module.exports = router;
