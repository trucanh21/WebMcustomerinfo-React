const knex = require('../database/knex');

function makeProductService() {
    function readProduct(payload) {
        const product = {
            SP_Ten: payload.SP_Ten,
            SP_NgayNhap: payload.SP_NgayNhap,
            SP_BPQuanLy: payload.SP_BPQuanLy,
        };
        // Remove undefined fields
        Object.keys(product).forEach(
            (key) => product[key] === undefined && delete product[key]
        );
        return product;
    }

    async function createProduct(payload) {
        const product = readProduct(payload);
        const [SP_ID] = await knex('SanPham').insert(product);
        return { SP_ID, ...product };
    }

    async function getManyProducts(query) {
        const { SP_Ten, SP_BPQuanLy, page = 1, limit = 10 } = query;
        const offset = (page - 1) * limit;

        const results = await knex('SanPham')
            .where((builder) => {
                if (SP_Ten) {
                    builder.where('SP_Ten', 'like', `%${SP_Ten}%`);
                }
                if (SP_BPQuanLy !== undefined) {
                    builder.where('SP_BPQuanLy', 'like', `%${SP_BPQuanLy}%`);
                }
            })
            .select(
                knex.raw('count(*) OVER() AS recordsCount'),
                'SP_ID',
                'SP_Ten',
                'SP_NgayNhap',
                'SP_BPQuanLy'
            )
            .limit(limit)
            .offset(offset);

        let totalRecords = 0;
        const products = results.map((result) => {
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
            products,
        };
    }

    async function updateProduct(SP_ID, payload) {
        const update = readProduct(payload);
        return knex('SanPham').where('SP_ID', SP_ID).update(update);
    }

    return {
        createProduct,
        getManyProducts,
        updateProduct,
    };
}

module.exports = makeProductService;
