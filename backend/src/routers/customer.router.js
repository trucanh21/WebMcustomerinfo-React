const express = require('express');
const contactsController = require('../controllers/customer.controller');
const router = express.Router();
//const { methodNotAllowed } = require('../controllers/errors.controller');

router
    .route('/')
    .get(contactsController.getCustomersByFilter)
    .post(contactsController.createCustomer)
    .delete(contactsController.deleteAllCustomer)
    // .all(methodNotAllowed);
router
    .route('/:id')
    .get(contactsController.getCustomer)
    .put(contactsController.updateCustomer)
    .delete(contactsController.deleteCustomer)
    // .all(methodNotAllowed);
module.exports = router;