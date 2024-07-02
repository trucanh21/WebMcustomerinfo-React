const express = require('express');
const contactsController = require('../controllers/admin.controller');
const router = express.Router();

router
    .route('/')
    .post(contactsController.registerAdmin);
    
router
    .route('/login')
    .post(contactsController.loginAdmin);

module.exports = router;
