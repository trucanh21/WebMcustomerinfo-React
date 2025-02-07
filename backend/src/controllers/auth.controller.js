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

  console.log(`Đăng nhập với: ${QT_Ten}, mật khẩu: ${matkhau}`);

  if (!QT_Ten || !matkhau) {
    return res.status(400).send({ message: "Tên hoặc mật khẩu không được để trống" });
  }

  try {
    const authService = makeAuthService();  // Đổi lại đúng tên function
    const user = await authService.login(QT_Ten, matkhau);

    if (!user) {
      return res.status(401).send({ message: "Sai tên hoặc mật khẩu" });
    }

    return res.status(200).send({
      message: "Đăng nhập thành công",
      user: {
        id: user.id,  // Trả về thông tin user nhưng không gửi mật khẩu
        QT_Ten: user.QT_Ten,
        province_id: user.province_id,
        district_id: user.district_id,
        wards_id: user.wards_id
      }
    });

  } catch (error) {
    console.error("Lỗi trong quá trình đăng nhập:", error);
    return res.status(500).send({ message: "Có lỗi xảy ra khi đăng nhập" });
  }
}


module.exports = {
  register,
  login,
};
