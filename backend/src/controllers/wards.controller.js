const makeWardsService = require('../services/wards.service');

async function getWardsByDistrict(req, res) {
    try {
        const { district_id } = req.query;
        const wardsService = makeWardsService();
        const wards = await wardsService.getWardsByDistrict(district_id);
        return res.send(wards);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving wards' });
    }
}

module.exports = {
    getWardsByDistrict,
};
