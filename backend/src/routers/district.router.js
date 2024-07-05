const express = require("express");
const districtController = require("../controllers/district.controller");
const router = express.Router();

router.route("/").get(districtController.getDistrictsByProvince);
router.route("/index").get(districtController.index);

module.exports = router;
