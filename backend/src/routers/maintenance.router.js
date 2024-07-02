const express = require('express');
const maintenanceController = require('../controllers/maintenance.controller');
const router = express.Router();

router
    .route('/')
    .get(maintenanceController.getMaintenancesByFilter)
    .post(maintenanceController.createMaintenance);
router
    .route('/:id')
    .put(maintenanceController.updateMaintenance);

module.exports = router;
