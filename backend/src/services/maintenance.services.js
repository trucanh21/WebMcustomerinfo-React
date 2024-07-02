const knex = require('../database/knex');

function makeMaintenanceService() {
    function readMaintenance(payload) {
        const maintenance = {
            HD_ID: payload.HD_ID,
            SP_ID: payload.SP_ID,
            BT_Ngay: payload.BT_Ngay,
            BT_CanBoThucHien: payload.BT_CanBoThucHien,
            BT_NoiDung: payload.BT_NoiDung,
            BT_Note: payload.BT_Note,
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
        const { BT_CanBoThucHien, BT_NoiDung, page = 1, limit = 10 } = query;
        const offset = (page - 1) * limit;

        const results = await knex('BaoTri')
            .leftJoin('HopDong', 'BaoTri.HD_ID', 'HopDong.HD_ID')
            .leftJoin('SanPham', 'BaoTri.SP_ID', 'SanPham.SP_ID')
            .where((builder) => {
                if (BT_CanBoThucHien) {
                    builder.where('BT_CanBoThucHien', 'like', `%${BT_CanBoThucHien}%`);
                }
                if (BT_NoiDung) {
                    builder.where('BT_NoiDung', 'like', `%${BT_NoiDung}%`);
                }
            })
            .select(
                knex.raw('count(*) OVER() AS recordsCount'),
                'BT_ID',
                'HD_ID',
                'SP_ID',
                'BT_Ngay',
                'BT_CanBoThucHien',
                'BT_NoiDung',
                'BT_Note',
                knex.raw('CONCAT(HopDong.HD_Loai, " - ", SanPham.SP_Ten) AS MaintenanceDetails')
            )
            .limit(limit)
            .offset(offset);

        let totalRecords = 0;
        const maintenances = results.map((result) => {
            totalRecords = result.recordsCount;
            delete result.recordsCount;
            return result;
        });

        return {
            metadata: {
                totalRecords,
                currentPage: page,
                totalPages: Math.ceil(totalRecords / limit),
                pageSize: limit,
            },
            maintenances,
        };
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
