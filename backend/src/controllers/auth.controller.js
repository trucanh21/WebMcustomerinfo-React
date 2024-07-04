const makeAuthService = require("../services/auth.services");
const makeContactsService = require("../services/admin.services");
async function register(req, res) {
  //   if (!req.body?.QT_Ten) {
  //     return res
  //       .status(400)
  //       .send({ message: "Tên khách hàng không được để trống" });
  //   }
  try {
    const data = req.body;
    console.log(req.body);
    console.log("test");
    const authService = makeAuthService();
    const auth = await authService.register(data);
    return res.send("");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "An error occurred while creating the contact" });
  }
}
async function login(req, res) {
  const QT_Ten = req.body.username;
  const matkhau = req.body.password;
  console.log(matkhau);
  if (!QT_Ten || !matkhau) {
    return res
      .status(400)
      .send({ message: "Tên hoặc mật khẩu không được để trống" });
  }
  try {
    const adminsService = makeContactsService();
    const contact = await adminsService.loginAdmin(QT_Ten, matkhau);
    console.log(contact);
    if (!contact) {
      return res.status(401).send({ message: "Tên hoặc mật khẩu không đúng" });
    }
    return res.send(contact);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "An error occurred while logging in" });
  }
}

module.exports = {
  register,
  login,
};
