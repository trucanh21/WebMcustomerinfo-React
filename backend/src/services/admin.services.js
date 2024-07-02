const knex = require('../database/knex');
const bcrypt = require('bcrypt');

function makeContactsService() {
    function readAdmin(payload) {
        const admin = {
            QT_Ten: payload.QT_Ten,
            QT_PhanCap: payload.QT_PhanCao,
            matkhau: payload.matkhau,
        };
        // Remove undefined fields
        Object.keys(admin).forEach(
            (key) => admin[key] === undefined && delete admin[key]
        );
        return admin;
    }

    async function registerAdmin(payload) {
        const admin = readAdmin(payload);
        const salt = await bcrypt.genSalt(10);
        admin.matkhau = await bcrypt.hash(admin.matkhau, salt);
        const [QT_ID] = await knex('QuanTri').insert(admin);
        return { QT_ID, ...admin };
    }

    async function loginAdmin(QT_Ten, matkhau) {
        const admin = await knex('QuanTri').where('QT_Ten', QT_Ten).first();
        if (admin && await bcrypt.compare(matkhau, admin.matkhau)) {
            return admin;
        }
        return null;
    }

    return {
        loginAdmin,
        registerAdmin,
    };
}

module.exports = makeContactsService;
