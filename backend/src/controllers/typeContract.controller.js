<<<<<<< HEAD
const makeTypeContractService = require('../services/typeContract.services');

async function getTypeContracts(req, res) {
    try {
        const typeContractService = makeTypeContractService();
        const typeContracts = await typeContractService.getManyTypeContracts();
        return res.send(typeContracts);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving type contracts' });
    }
}

module.exports = {
    getTypeContracts,
};
=======
const makeTypeContractService = require('../services/typeContract.services');

async function getTypeContracts(req, res) {
    try {
        const typeContractService = makeTypeContractService();
        const typeContracts = await typeContractService.getManyTypeContracts();
        return res.send(typeContracts);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving type contracts' });
    }
}

module.exports = {
    getTypeContracts,
};
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
