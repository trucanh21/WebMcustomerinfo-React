const knex = require('../database/knex');

function makeInvoiceService() {
    function readInvoice(payload) {
        const invoice = {
            HD_ID: payload.HD_ID,
            HoaD_Ngay: payload.HoaD_Ngay,
            HoaD_GiaTriHopDong: payload.HoaD_GiaTriHopDong,
            HoaD_BoPhanQuanLy: payload.HoaD_BoPhanQuanLy,
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
        const { HoaD_BoPhanQuanLy, HoaD_HienTrangThanhToan, page = 1, limit = 10 } = query;
        const offset = (page - 1) * limit;

        const results = await knex('HoaDon')
            .leftJoin('HopDong', 'HoaDon.HD_ID', 'HopDong.HD_ID')
            .where((builder) => {
                if (HoaD_BoPhanQuanLy) {
                    builder.where('HoaD_BoPhanQuanLy', 'like', `%${HoaD_BoPhanQuanLy}%`);
                }
                if (HoaD_HienTrangThanhToan !== undefined) {
                    builder.where('HoaD_HienTrangThanhToan', 'like', `%${HoaD_HienTrangThanhToan}%`);
                }
            })
            .select(
                knex.raw('count(*) OVER() AS recordsCount'),
                'HoaD_ID',
                'HD_ID',
                'HoaD_Ngay',
                'HoaD_GiaTriHopDong',
                'HoaD_BoPhanQuanLy',
                'HoaD_HienTrangThanhToan',
                'HoaD_NgayThanhToan',
                knex.raw('CONCAT(HopDong.HD_Loai, " - ", HopDong.HD_Ngay) AS InvoiceDetails')
            )
            .limit(limit)
            .offset(offset);

        let totalRecords = 0;
        const invoices = results.map((result) => {
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
            invoices,
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
