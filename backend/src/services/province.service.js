const knex = require('../database/knex');

function makeProvinceService() {
    async function getAllProvinces() {
        return await knex('province').select('province_id', 'name');
    }

    return {
        getAllProvinces,
    };
}

module.exports = makeProvinceService;
