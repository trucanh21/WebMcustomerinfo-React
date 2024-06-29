const knex = require('../database/knex');

function makeContactsService() {
    function readCustomer(payload) {
        const customer = {
            KH_Ten: payload.KH_Ten,
            KH_DaiDien: payload.KH_DaiDien,
            KH_SDT: payload.KH_SDT,
            KH_TaiKhoan: payload.KH_TaiKhoan,
            KH_PLDonVi: payload.KH_PLDonVi,
            KH_ProvinceID: payload.KH_ProvinceID,
            KH_DistrictID: payload.KH_DistrictID,
            KH_WardsID: payload.KH_WardsID,
        };
        // Remove undefined fields
        Object.keys(customer).forEach(
            (key) => customer[key] === undefined && delete customer[key]
        );
        return customer;
    }

    async function createCustomer(payload) {
        const customer = readCustomer(payload);
        const [KH_ID] = await knex('KhachHang').insert(customer);
        return { KH_ID, ...customer };
    }

    async function getManycustomers(query) {
    const { KH_Ten, KH_BPQuanLy, page = 1, limit = 10 } = query;
    const offset = (page - 1) * limit;

    const results = await knex('KhachHang')
        .leftJoin('province', 'KhachHang.KH_ProvinceID', 'province.province_id')
        .leftJoin('district', 'KhachHang.KH_DistrictID', 'district.district_id')
        .leftJoin('wards', 'KhachHang.KH_WardsID', 'wards.wards_id')
        .where((builder) => {
            if (KH_Ten) {
                builder.where('KH_Ten', 'like', `%${KH_Ten}%`);
            }
            if (KH_BPQuanLy !== undefined) {
                builder.where('KH_BPQuanLy', 'like', `%${KH_BPQuanLy}%`);
            }
        })
        .select(
            knex.raw('count(*) OVER() AS recordsCount'),
            'KH_ID',
            'KH_Ten',
            'KH_DaiDien',
            'KH_SDT',
            'KH_TaiKhoan',
            'KH_PLDonVi',
            'KH_ProvinceID',
            'KH_DistrictID',
            'KH_WardsID',
            knex.raw('CONCAT(province.name, " - ", district.name, " - ", wards.name) AS KH_DiaChi')
        )
        .limit(limit)
        .offset(offset);

    let totalRecords = 0;
    const customers = results.map((result) => {
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
        customers,
    };
}


    async function updateCustomer(KH_ID, payload) {
        const update = readCustomer(payload);
        return knex('KhachHang').where('KH_ID', KH_ID).update(update);
    }

    return {
        createCustomer,
        getManycustomers,
        updateCustomer,
    };
}

module.exports = makeContactsService;
