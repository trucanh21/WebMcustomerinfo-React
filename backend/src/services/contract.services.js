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

    async function getManyContracts(query) {
    const { fromDate, toDate, fromDateInvoice, toDateInvoice, KH_Ten } = query;

    const results = await knex('HopDong')
        .join('KhachHang', 'HopDong.KH_ID', 'KhachHang.KH_ID')
        .join('SanPham', 'HopDong.SP_ID', 'SanPham.SP_ID')
        .join('LoaiHopDong', 'HopDong.LHD_ID', 'LoaiHopDong.LHD_ID')
        .modify((qb) => {
            // Condition for fromDate and toDate with LHD_ID = 1
            if (fromDate && toDate) {
                qb.whereRaw('DATE_ADD(HopDong.HD_Ngay, INTERVAL 1 YEAR) >= ?', [fromDate])
                  .andWhereRaw('DATE_ADD(HopDong.HD_Ngay, INTERVAL 1 YEAR) <= ?', [toDate])
                  .andWhere('HopDong.LHD_ID', 1);
            }

            // Condition for fromDateInvoice and toDateInvoice with LHD_ID = 1, 2, or 3
            if (fromDateInvoice && toDateInvoice) {
                qb.orWhere((qb2) => {
                    qb2.where((qb3) => {
                        qb3.where('HopDong.LHD_ID', 1)
                            .andWhereRaw('DATE_ADD(HopDong.HD_Ngay, INTERVAL 30 DAY) >= ?', [fromDateInvoice])
                            .andWhereRaw('DATE_ADD(HopDong.HD_Ngay, INTERVAL 30 DAY) <= ?', [toDateInvoice])
                            .andWhere('HopDong.HD_HienTrang', 'Chưa xuất hóa đơn');
                    }).orWhere((qb3) => {
                        qb3.whereIn('HopDong.LHD_ID', [2, 3])
                            .andWhereRaw('DATE_ADD(HopDong.HD_Ngay, INTERVAL 60 DAY) >= ?', [fromDateInvoice])
                            .andWhereRaw('DATE_ADD(HopDong.HD_Ngay, INTERVAL 90 DAY) <= ?', [toDateInvoice])
                            .andWhere('HopDong.HD_HienTrang', 'Chưa xuất hóa đơn');
                    });
                });
            }

            // Condition for KH_Ten
            if (KH_Ten) {
                qb.andWhere('KhachHang.KH_Ten', 'like', `%${KH_Ten}%`);
            }
        })
        .select(
            'HopDong.HD_ID',
            'HopDong.QT_ID',
            'HopDong.KH_ID',
            'HopDong.SP_ID',
            'LoaiHopDong.LHD_NAME',
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
    async function updateContractInvoice(HD_ID) {
        const updatedRows = await knex('HopDong')
            .where('HD_ID', HD_ID)
            .update({ HD_HienTrang: 'Đã xuất hóa đơn' });

        return updatedRows > 0; // Return true if at least one row was updated
    }

    async function updateContractMaintenance(HD_ID, LHD_ID) {
        const updatedRows = await knex('HopDong')
            .where('HD_ID', HD_ID)
            .update({
                HD_HienTrang: 'Chưa xuất hóa đơn',
                LHD_ID: '3'
            });

        return updatedRows > 0; // Return true if at least one row was updated
    }
 
    return {
        createContract,
        getManyContracts,
        updateContractInvoice,
        updateContractMaintenance,
    };
}

module.exports = makeContractService;
