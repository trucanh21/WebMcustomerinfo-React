const knex = require('../database/knex');

function makeWardsService() {
    async function getWardsByDistrict(district_id) {
        return await knex('wards').where('district_id', district_id).select('wards_id', 'name');
    }

    return {
        getWardsByDistrict,
    };
}

module.exports = makeWardsService;
