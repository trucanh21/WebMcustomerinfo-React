const knex = require('../database/knex');

function makeContractService() {
    function readContract(payload) {
        const contract = {
            QT_ID: payload.QT_ID,
            KH_ID: payload.KH_ID,
            SP_ID: payload.SP_ID,
            LHD_ID: payload.LHD_ID,
            HD_Ngay: payload.HD_Ngay,
            HD_GiaTri: payload.HD_GiaTri,
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

    async function getManyContracts() {
        const results = await knex('HopDong')
            .join('KhachHang', 'HopDong.KH_ID', 'KhachHang.KH_ID')
            .join('SanPham', 'HopDong.SP_ID', 'SanPham.SP_ID')
            .select(
                'HopDong.HD_ID',
                'HopDong.QT_ID',
                'HopDong.KH_ID',
                'HopDong.SP_ID',
                'HopDong.LHD_ID',
                'HopDong.HD_Ngay',
                'HopDong.HD_GiaTri',
                'HopDong.HD_HienTrang',
                'HopDong.HD_Note',
                'SanPham.SP_BPQuanLy',
                'SanPham.SP_Ten',
                'KhachHang.KH_Ten'
            );

        return {
            contracts: results,
        };
    }

    return {
        createContract,
        getManyContracts,
    };
}

module.exports = makeContractService;
