const makeContractService = require('../services/contract.services')

async function createContract(req, res) {
    if (!req.body?.QT_ID) {
        return res.status(400).send({ message: 'Loại hợp đồng không được để trống' });
    }

    try {
        const contractService = makeContractService();
        const contract = await contractService.createContract(req.body);
        return res.send(contract);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while creating the contract' });
    }
}

async function getContractsByFilter(req, res) {
    try {
        const contractService = makeContractService();
        const contracts = await contractService.getManyContracts(req.query);
        return res.send(contracts);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving contracts' });
    }
}

module.exports = {
    getContractsByFilter,
    createContract,
};