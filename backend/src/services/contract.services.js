const knex = require('../database/knex');

function makeContractService() {
    function readContract(payload) {
        const contract = {
            QT_ID: payload.QT_ID,
            KH_ID: payload.KH_ID,
            SP_ID: payload.SP_ID,
            HD_Loai: payload.HD_Loai,
            HD_Ngay: payload.HD_Ngay,
            HD_GiaTri: payload.HD_GiaTri,
            HD_CBGhiNhanDoanhSo: payload.HD_CBGhiNhanDoanhSo,
            HD_HienTrang: payload.HD_HienTrang,
            HD_Note: payload.HD_Note,
        };
        // Remove undefined fields
        Object.keys(contract).forEach(
            (key) => contract[key] === undefined && delete contract[key]
        );
        return contract;
    }

    async function createContract(payload) {
        const contract = readContract(payload);
        const [HD_ID] = await knex('HopDong').insert(contract);
        return { HD_ID, ...contract };
    }

    async function getManyContracts(query) {
        const { HD_Loai, HD_CBGhiNhanDoanhSo, page = 1, limit = 10 } = query;
        const offset = (page - 1) * limit;

        const results = await knex('HopDong')
            .leftJoin('KhachHang', 'HopDong.KH_ID', 'KhachHang.KH_ID')
            .leftJoin('SanPham', 'HopDong.SP_ID', 'SanPham.SP_ID')
            .where((builder) => {
                if (HD_Loai) {
                    builder.where('HD_Loai', 'like', `%${HD_Loai}%`);
                }
                if (HD_CBGhiNhanDoanhSo !== undefined) {
                    builder.where('HD_CBGhiNhanDoanhSo', 'like', `%${HD_CBGhiNhanDoanhSo}%`);
                }
            })
            .select(
                knex.raw('count(*) OVER() AS recordsCount'),
                'HD_ID',
                'QT_ID',
                'KH_ID',
                'SP_ID',
                'HD_Loai',
                'HD_Ngay',
                'HD_GiaTri',
                'HD_CBGhiNhanDoanhSo',
                'HD_HienTrang',
                'HD_Note',
                knex.raw('CONCAT(KhachHang.KH_Ten, " - ", SanPham.SP_Ten) AS ContractDetails')
            )
            .limit(limit)
            .offset(offset);

        let totalRecords = 0;
        const contracts = results.map((result) => {
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
            contracts,
        };
    }

    async function updateContract(HD_ID, payload) {
        const update = readContract(payload);
        return knex('HopDong').where('HD_ID', HD_ID).update(update);
    }

    return {
        createContract,
        getManyContracts,
        updateContract,
    };
}

module.exports = makeContractService;
