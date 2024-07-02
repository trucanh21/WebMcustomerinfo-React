const knex = require('../database/knex');

function makeTypeContractService() {
    async function getManyTypeContracts() {
        const results = await knex('loaihopdong')
            .select('*');
        return {
            typeContracts: results,
        };
    }

    return {
        getManyTypeContracts,
    };
}

module.exports = makeTypeContractService;
