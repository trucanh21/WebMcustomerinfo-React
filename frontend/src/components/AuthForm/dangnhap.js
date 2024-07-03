import React, { useState } from 'react';
// import '../../assets/css/RegistrationForm.css';

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
        // Xử lý gửi dữ liệu formData
        console.log(formData);
    };

    return (
        <div className="login-container">
            <h1>Đăng Nhập</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>
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
            <style jsx>{`
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
