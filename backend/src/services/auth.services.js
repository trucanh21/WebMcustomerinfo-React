const knex = require("../database/knex");
const bcrypt = require("bcrypt");

function makeAuthService() {
  function readAuth(payload) {
    console.log(payload);
    const auth = {
      QT_ten: payload.username,
      matkhau: payload.password,
      province_id: payload.province_id,
      district_id: payload.district_id,
      wards_id: payload.wards_id,
    };
    // Remove undefined fields
    Object.keys(auth).forEach(
      (key) => auth[key] === undefined && delete auth[key]
    );
    return auth;
  }

  async function register(payload) {
    console.log("test");
    console.log(payload);
    const auth = readAuth(payload);
    const hashedPassword = await bcrypt.hash(payload.password, 12);
    auth.matkhau = hashedPassword;
    const submit = await knex("quantri").insert(auth);
    // return { HD_ID, ...contract };
  }

  async function login(QT_Ten, matkhau) {
    const admin = await knex("QuanTri").where("QT_Ten", QT_Ten).first();
    if (admin && (await bcrypt.compare(matkhau, admin.matkhau))) {
      return admin;
    }
    return null;
  }
  return {
    register,
    login,
  };
}

module.exports = makeAuthService;
