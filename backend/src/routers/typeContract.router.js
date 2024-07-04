<<<<<<< HEAD
const express = require('express');
const typeContractController = require('../controllers/typeContract.controller');
const router = express.Router();

router
    .route('/')
    .get(typeContractController.getTypeContracts)

module.exports = router;
=======
const express = require('express');
const typeContractController = require('../controllers/typeContract.controller');
const router = express.Router();

router
    .route('/')
    .get(typeContractController.getTypeContracts)

module.exports = router;
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
