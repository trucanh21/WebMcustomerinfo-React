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
        // Xử lý gửi dữ liệu formData
        console.log(formData);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Đăng nhập</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
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
    );
};

export default LoginForm;
