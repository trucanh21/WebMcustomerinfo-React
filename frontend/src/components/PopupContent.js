import React from 'react';
import '../assets/css/Popup.css';

const PopupShow = ({ onClose  }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm khách hàng</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <div className="popup-column">
            <div className="space-popup">
              <label>Mã KH:</label>
              <input type="text"/>
            </div>
            <div className="space-popup">
              <label>Tên đơn vị:</label>
              <input type="text" placeholder="Nhập tên đơn vị" />
            </div>
            <div className="space-popup">
              <label>Đại diện:</label>
              <input type="text" placeholder="Nhập đại diện" />
            </div>
            <div className="space-popup">
              <label>Điện thoại:</label>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
              Hủy
            </button>
          </div>
          <div className="popup-column">
            <div className="space-popup">
              <label>Tài khoản:</label>
              <input type="text" placeholder="Nhập tài khoản" />
            </div>
            <div className="space-popup">
              <label>Phân loại đơn vị:</label>
              <select>
                <option>Danh sách 01</option>
                <option>Danh sách 02</option>
                <option>Danh sách 03</option>
              </select>
            </div>
            <div className="space-popup">
              <label>Bộ phận quản lý:</label>
              <input type="text" placeholder="Nhập bộ phận quản lý" />
            </div>
            <div className="space-popup">
              <label>Địa chỉ:</label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <button className="btn btn-primary">Thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupShow;
