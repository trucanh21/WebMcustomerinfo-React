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

async function updateContractInvoice(req, res) {
    const { id } = req.params;
    try {
        const contractService = makeContractService();
        const updated = await contractService.updateContractInvoice(id);
        if (updated) {
            return res.status(200).json({ message: 'Trạng thái hóa đơn hợp đồng đã được cập nhật thành công.' });
        } else {
            return res.status(404).json({ message: 'Không tìm thấy hợp đồng để cập nhật.' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật trạng thái hóa đơn hợp đồng.' });
    }
}

async function updateContractMaintenance(req, res) {
    const { id } = req.params;
    try {
        const contractService = makeContractService();
        const updated = await contractService.updateContractMaintenance(id);
        if (updated) {
            return res.status(200).json({ message: 'Trạng thái hóa đơn hợp đồng đã được cập nhật thành công.' });
        } else {
            return res.status(404).json({ message: 'Không tìm thấy hợp đồng để cập nhật.' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật trạng thái hóa đơn hợp đồng.' });
    }
}


module.exports = {
    getContractsByFilter,
    createContract,
    updateContractInvoice,
    updateContractMaintenance
};