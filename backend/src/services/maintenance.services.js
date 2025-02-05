const knex = require('../database/knex');

function makeMaintenanceService() {
    function readMaintenance(payload) {
        const maintenance = {
            HD_ID: payload.HD_ID,
            SP_Ten: payload.SP_Ten,
            BT_Ngay: payload.BT_Ngay,
            BT_CanBoThucHien: payload.BT_CanBoThucHien,
            BT_NoiDung: payload.BT_NoiDung,
        };
        // Remove undefined fields
        Object.keys(maintenance).forEach(
            (key) => maintenance[key] === undefined && delete maintenance[key]
        );
        return maintenance;
    }

    async function createMaintenance(payload) {
        const maintenance = readMaintenance(payload);
        const [BT_ID] = await knex('BaoTri').insert(maintenance);
        return { BT_ID, ...maintenance };
    }

    async function getManyMaintenances(query) {
        const { BT_ID, SP_Ten } = query;

        const results = await knex('BaoTri')
            .leftJoin('HopDong', 'BaoTri.HD_ID', 'HopDong.HD_ID')
            .where((builder) => {
                if (BT_ID) {
                    builder.where('BaoTri.BT_ID', 'like', `%${BT_ID}%`);
                }
                if (SP_Ten) {
                    builder.where('BaoTri.SP_Ten', 'like', `%${SP_Ten}%`);
                }
            })
            .select(
                'BaoTri.BT_ID',
                'BaoTri.HD_ID',
                'BaoTri.SP_Ten',
                'BaoTri.BT_Ngay',
                'BaoTri.BT_CanBoThucHien',
                'BaoTri.BT_NoiDung'
            );

        return results;
    }


    async function updateMaintenance(BT_ID, payload) {
        const update = readMaintenance(payload);
        return knex('BaoTri').where('BT_ID', BT_ID).update(update);
    }

    return {
        createMaintenance,
        getManyMaintenances,
        updateMaintenance,
    };
}

module.exports = makeMaintenanceService;
