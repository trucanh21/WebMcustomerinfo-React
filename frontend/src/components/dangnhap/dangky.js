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
        // Xử lý gửi dữ liệu formData
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <div>
                <label>Phân cấp:</label>
                <select value={level} onChange={handleLevelChange} required>
                    <option value="">Chọn cấp</option>
                    <option value="commune">Xã</option>
                    <option value="district">Huyện</option>
                    <option value="province">Tỉnh</option>
                </select>
            </div>
            {level === 'commune' && (
                <>
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
                        <label>Tên tỉnh:</label>
                        <input
                            type="text"
                            name="provinceName"
                            value={formData.provinceName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </>
            )}
            {level === 'district' && (
                <>
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
                        <label>Tên tỉnh:</label>
                        <input
                            type="text"
                            name="provinceName"
                            value={formData.provinceName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </>
            )}
            {level === 'province' && (
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
            )}
            <button type="submit">Đăng ký</button>
        </form>
    );
};

export default RegistrationForm;
