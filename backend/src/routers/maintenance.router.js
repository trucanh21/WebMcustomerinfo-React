const express = require('express');
const maintenanceController = require('../controllers/maintenance.controller');
const router = express.Router();

router
    .route('/')
    .get(maintenanceController.getMaintenancesByFilter)
    .post(maintenanceController.createMaintenance);
    
module.exports = router;
