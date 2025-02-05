import React, { useState } from "react";
import '../../assets/css/RegistrationForm.css';
import { authLogin } from "../../features/apiCalls";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const authLog = async () => {
        try {
          const auth = await authLogin(formData);
        } catch (error) {
          console.error("Error fetching customers", error);
        }
      };
      authLog();
      if (authLog) {
        localStorage.setItem("isLogin", true);

        window.location.href = "/qlkh";
      }
    } catch (error) {
      console.error("Error fetching customers", error);
    }
    console.log(formData);
  };

  return (
    <div className="login-container">
      <h1>Đăng Nhập</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <div className="login-link">
        Bạn đã có tài khoản ? <a href="/register">Đăng ký</a>
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 30px;
          margin-top: 30px;
          font-size: 32px;
          text-align: center;
          color: #333;
        }
        .login-link {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        .login-link a {
          color: #0149cd;
          text-decoration: none;
        }
        .login-link a:hover {
          text-decoration: underline;
        }
        h1 {
          margin-bottom: 30px;
          margin-top: 30px;
          font-size: 32px;
          text-align: center;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
