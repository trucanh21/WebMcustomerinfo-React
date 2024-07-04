const makeDistrictService = require("../services/district.service");

async function getDistrictsByProvince(req, res) {
  try {
    const { province_id } = req.query;
    const districtService = makeDistrictService();
    const districts = await districtService.getDistrictsByProvince(province_id);
    return res.send(districts);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "An error occurred while retrieving districts" });
  }
}

async function index(req, res) {
  try {
    const districtService = makeDistrictService();
    const districts = await districtService.getDistricts();
    // console.log(districts);
    return res.send(districts);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "An error occurred while retrieving districts" });
  }
}

module.exports = {
  getDistrictsByProvince,
  index,
};
