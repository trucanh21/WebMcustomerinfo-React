<<<<<<< HEAD
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
=======
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
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
