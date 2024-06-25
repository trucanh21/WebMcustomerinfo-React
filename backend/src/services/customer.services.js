const knex = require('../database/knex');

function makeContactsService() {
    function readCustomer(payload) {
        const customer = {
           KH_Ten: payload.KH_Ten,
           KH_DaiDien: payload.KH_DaiDien,
           KH_SDT: payload.KH_SDT,
           KH_TaiKhoan: payload.KH_TaiKhoan,
           KH_PLDonVi: payload.KH_PLDonVi,
           KH_BPQuanLy: payload.KH_BPQuanLy,
           KH_DiaChi: payload.KH_DiaChi,
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
        const { KH_Ten, KH_BPQuanLy, page = 1, limit = 5 } = query;
        const paginator = new Paginator(page, limit);

        let results = await knex('KhachHang')
            .where((builder) => {
                if (KH_Ten) {
                    builder.where('KH_Ten', 'like', `%${KH_Ten}%`);
                }
                if (KH_BPQuanLy !== undefined) {
                    builder.where('KH_BPQuanLy', 'like', `%${KH_BPQuanLy}%`);
                }
            })
            .select(
                knex.raw('count(KH_ID) OVER() AS recordsCount'),
                'KH_ID',
                'KH_Ten',
                'KH_DaiDien',
                'KH_SDT',
                'KH_TaiKhoan',
                'KH_PLDonVi',
                'KH_BPQuanLy',
                'KH_DiaChi'
            )
            .limit(paginator.limit)
            .offset(paginator.offset);

        let totalRecords = 0;
        results = results.map((result) => {
            totalRecords = result.recordsCount;
            delete result.recordsCount;
            return result;
        });

        return {
            metadata: paginator.getMetadata(totalRecords),
            customers: results,
        };
    }

    async function getCustomersById(KH_ID) {
        return knex('KhachHang').where('KH_ID', KH_ID).select('*').first();
    }

    async function updateCustomer(KH_ID, payload) {
        const update = readCustomer(payload);
        return knex('KhachHang').where('KH_ID', KH_ID).update(update);
    }

    async function deleteCustomer(KH_ID) {
        return knex('KhachHang').where('KH_ID', KH_ID).del();
    }

    async function deleteAllCustomers() {
        return knex('KhachHang').del();
    }

    return {
        createCustomer,
        getManycustomers,
        getCustomersById,
        updateCustomer,
        deleteCustomer,
        deleteAllCustomers,
    };
}

module.exports = makeContactsService;
