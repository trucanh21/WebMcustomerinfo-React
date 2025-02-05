const knex = require('../database/knex');

function makeInvoiceService() {
    function readInvoice(payload) {
        const invoice = {
            HD_ID: payload.HD_ID,
            HoaD_Ngay: payload.HoaD_Ngay,
            HoaD_HienTrangThanhToan: payload.HoaD_HienTrangThanhToan,
            HoaD_NgayThanhToan: payload.HoaD_NgayThanhToan,
        };
        // Remove undefined fields
        Object.keys(invoice).forEach(
            (key) => invoice[key] === undefined && delete invoice[key]
        );
        return invoice;
    }

    async function createInvoice(payload) {
        const invoice = readInvoice(payload);
        const [HoaD_ID] = await knex('HoaDon').insert(invoice);
        return { HoaD_ID, ...invoice };
    }

    async function getManyInvoices(query) {
    const { HD_ID } = query;

    const results = await knex('HoaDon')
        .leftJoin('HopDong', 'HoaDon.HD_ID', 'HopDong.HD_ID')
        .leftJoin('SanPham', 'HopDong.SP_ID', 'SanPham.SP_ID')
        .modify((builder) => {
            if (HD_ID) {
                builder.where('HoaDon.HD_ID', 'like', `%${HD_ID}%`);
            }
        })
        .select(
            'HoaDon.HoaD_ID',
            'HoaDon.HD_ID',
            'HoaDon.HoaD_Ngay',
            'HopDong.HD_GiaTri AS HoaD_GiaTriHopDong',
            'SanPham.SP_BPQuanLy AS HoaD_BoPhanQuanLy',
            'HoaDon.HoaD_HienTrangThanhToan',
            'HoaDon.HoaD_NgayThanhToan'
        );

    return {
        invoices: results,
    };
}

    async function updateInvoice(HoaD_ID, payload) {
        const update = readInvoice(payload);
        return knex('HoaDon').where('HoaD_ID', HoaD_ID).update(update);
    }

    return {
        createInvoice,
        getManyInvoices,
        updateInvoice,
    };
}

module.exports = makeInvoiceService;
