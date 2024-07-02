const express = require('express');
const wardsController = require('../controllers/wards.controller');
const router = express.Router();

router
    .route('/')
    .get(wardsController.getWardsByDistrict);

module.exports = router;
