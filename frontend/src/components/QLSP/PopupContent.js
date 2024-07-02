import React, { useState } from 'react';
import '../../assets/css/Popup.css';
import { addProduct } from '../../features/apiCalls';

const PopupShow = ({ onClose }) => {
  const [formData, setFormData] = useState({
    SP_Ten: '',
    SP_NgayNhap: '',
    SP_BPQuanLy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData);
      onClose(); // Close the popup on successful addition
    } catch (error) {
      console.error('Error adding product', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm sản phẩm</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit}>
            <div className="popup-column">
              <div className="space-popup">
                <label>Tên sản phẩm:</label>
                <input
                  type="text"
                  className='sanpham'
                  name="SP_Ten"
                  placeholder="Nhập tên sản phẩm"
                  value={formData.SP_Ten}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-popup">
                <label>Ngày nhập:</label>
                <input
                  type="date"
                  className='sanpham'
                  name="SP_NgayNhap"
                  placeholder="Ngày nhập"
                  value={formData.SP_NgayNhap}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="popup-column">
              <div className="space-popup">
                <label>Bộ phận quản lý:</label>
                <input
                  type="text"
                  name="SP_BPQuanLy"
                  className='sanpham'
                  placeholder="Nhập bộ phận quản lý"
                  value={formData.SP_BPQuanLy}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='button-popup'>
              <button type="submit" className="btn btn-primary">Thêm</button>
              <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupShow;
