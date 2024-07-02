import React, { useState } from 'react';
import '../../assets/css/RegistrationForm.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
        // Handle formData submission
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
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
            <div className="register-link">
                Bạn chưa có tài khoản? <a href="/register">Đăng ký</a>
            </div>
            <style jsx>{`
                h1 {
                    margin-bottom: 30px;
                    margin-top: 30px;
                    font-size: 32px;
                    text-align: center;
                    color: #333;
                }
                .register-link {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 14px;
                }
                .register-link a {
                    color: #0149CD;
                    text-decoration: none;
                }
                .register-link a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default LoginForm;
