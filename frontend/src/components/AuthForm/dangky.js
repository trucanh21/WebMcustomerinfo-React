import React, { useState } from 'react';
import '../../assets/css/RegistrationForm.css';

const RegistrationForm = () => {
    const [level, setLevel] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        communeName: '',
        districtName: '',
        provinceName: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle formData submission
        console.log(formData);
    };

    return (
        <div className="login-container">
            <h1>Đăng Ký</h1>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <label>Phân cấp:</label>
                    <select value={level} onChange={handleLevelChange} required>
                        <option value="">Chọn cấp</option>
                        <option value="commune">Xã</option>
                        <option value="district">Huyện</option>
                        <option value="province">Tỉnh</option>
                    </select>
                </div>
                <div className="location-fields">
                    <div>
                        <label>Tên tỉnh:</label>
                        <input
                            type="text"
                            name="provinceName"
                            value={formData.provinceName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Tên huyện:</label>
                        <input
                            type="text"
                            name="districtName"
                            value={formData.districtName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Tên xã:</label>
                        <input
                            type="text"
                            name="communeName"
                            value={formData.communeName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Đăng ký</button>
            </form>
            <div className="login-link">
                Bạn đã có tài khoản ? <a href="/login">Đăng nhập</a>
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
                    color: #0149CD;
                    text-decoration: none;
                }
                .login-link a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default RegistrationForm;
