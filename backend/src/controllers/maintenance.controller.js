const makeMaintenanceService = require('../services/maintenance.services');

async function createMaintenance(req, res) {
    if (!req.body?.BT_NoiDung) {
        return res.status(400).send({ message: 'Nội dung bảo trì không được để trống' });
    }

    try {
        const maintenanceService = makeMaintenanceService();
        const maintenance = await maintenanceService.createMaintenance(req.body);
        return res.send(maintenance);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while creating the maintenance' });
    }
}

async function getMaintenancesByFilter(req, res) {
    try {
        const maintenanceService = makeMaintenanceService();
        const maintenances = await maintenanceService.getManyMaintenances(req.query);
        return res.send(maintenances);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving maintenances' });
    }
}

async function updateMaintenance(req, res, next) {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const maintenanceService = makeMaintenanceService();
        const updated = await maintenanceService.updateMaintenance(
            req.params.id,
            req.body
        );
        if (!updated) {
            return next(new ApiError(404, "Maintenance not found"));
        }
        return res.send({ message: "Maintenance was update successfully" });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating maintenance with id=${req.params.id}`)
        );
    }
}

module.exports = {
    getMaintenancesByFilter,
    createMaintenance,
    updateMaintenance,
};
