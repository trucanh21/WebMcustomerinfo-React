const express = require('express');
const contactsController = require('../controllers/customer.controller');
const router = express.Router();
//const { methodNotAllowed } = require('../controllers/errors.controller');

router
    .route('/')
    .get(contactsController.getCustomersByFilter)
    .post(contactsController.createCustomer);
router
    .route('/:id')
    .put(contactsController.updateContact);
module.exports = router;