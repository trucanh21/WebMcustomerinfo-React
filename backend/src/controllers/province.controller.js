const makeProvinceService = require('../services/province.service');

async function getAllProvinces(req, res) {
    try {
        const provinceService = makeProvinceService();
        const provinces = await provinceService.getAllProvinces();
        return res.send(provinces);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving provinces' });
    }
}

module.exports = {
    getAllProvinces,
};
