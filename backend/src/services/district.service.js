const knex = require('../database/knex');

function makeDistrictService() {
    async function getDistrictsByProvince(province_id) {
        return await knex('district').where('province_id', province_id).select('district_id', 'name');
    }

    return {
        getDistrictsByProvince,
    };
}

module.exports = makeDistrictService;
