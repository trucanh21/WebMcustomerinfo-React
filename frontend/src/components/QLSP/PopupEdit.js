<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../../assets/css/Popup.css';
import { updateProduct } from '../../features/apiCalls';

const PopupEdit = ({ onClose, product }) => {
  const [formData, setFormData] = useState({
    SP_Ten: '',
    SP_NgayNhap: '',
    SP_BPQuanLy: '',
  });

  useEffect(() => {
    setFormData({
      SP_Ten: product.SP_Ten || '',
      SP_NgayNhap: product.SP_NgayNhap ? product.SP_NgayNhap.split('T')[0] : '',
      SP_BPQuanLy: product.SP_BPQuanLy || '',
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(product.SP_ID, formData);
      onClose(); // Close the popup on successful update
    } catch (error) {
      console.error('Error updating product', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Sửa sản phẩm</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit}>
            <div className="popup-column">
              <div className="space-popup">
                <label>Tên sản phẩm:</label>
                <input
                  type="text"
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
                  name="SP_NgayNhap"
                  placeholder="Ngày nhập"
                  value={formData.SP_NgayNhap}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-popup">
                <label>Bộ phận quản lý:</label>
                <input
                  type="text"
                  name="SP_BPQuanLy"
                  placeholder="Nhập bộ phận quản lý"
                  value={formData.SP_BPQuanLy}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='button-popup'>
                <button type="submit" className="btn btn-primary">Sửa</button>
                <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
                  Hủy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;
=======
import React, { useState, useEffect } from 'react';
import '../../assets/css/Popup.css';
import { updateProduct } from '../../features/apiCalls';

const PopupEdit = ({ onClose, product }) => {
  const [formData, setFormData] = useState({
    SP_Ten: '',
    SP_NgayNhap: '',
    SP_BPQuanLy: '',
  });

  useEffect(() => {
    setFormData({
      SP_Ten: product.SP_Ten || '',
      SP_NgayNhap: product.SP_NgayNhap ? product.SP_NgayNhap.split('T')[0] : '',
      SP_BPQuanLy: product.SP_BPQuanLy || '',
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(product.SP_ID, formData);
      onClose(); // Close the popup on successful update
    } catch (error) {
      console.error('Error updating product', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Sửa sản phẩm</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit}>
            <div className="popup-column">
              <div className="space-popup">
                <label>Tên sản phẩm:</label>
                <input
                  type="text"
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
                  name="SP_NgayNhap"
                  placeholder="Ngày nhập"
                  value={formData.SP_NgayNhap}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-popup">
                <label>Bộ phận quản lý:</label>
                <input
                  type="text"
                  name="SP_BPQuanLy"
                  placeholder="Nhập bộ phận quản lý"
                  value={formData.SP_BPQuanLy}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='button-popup'>
                <button type="submit" className="btn btn-primary">Sửa</button>
                <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
                  Hủy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
