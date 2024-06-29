const makeContractService = require('../services/contract.services')

async function createContract(req, res) {
    if (!req.body?.HD_Loai) {
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

async function updateContract(req, res, next) {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const contractService = makeContractService();
        const updated = await contractService.updateContract(
            req.params.id,
            req.body
        );
        if (!updated) {
            return next(new ApiError(404, "Contract not found"));
        }
        return res.send({ message: "Contract was update successfully" });
    } catch (error) {
        console.log(error);
        return next(
             new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
}

module.exports = {
    getContractsByFilter,
    createContract,
    updateContract,
};