import React from 'react';
import '../../assets/css/Popup.css';

const PopupDelete = ({ onClose  }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Cập nhật hợp đồng</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <div className="popup-column">
            <div className="space-popup">
              <label>Mã BH:</label>
              <input type="text"/>
            </div>
            <div className="space-popup">
              <label>Ngày nhập:</label>
              <input type="text" placeholder="Nhập tên đơn vị" />
            </div>
            <div className="space-popup">
              <label>Loại hợp đồng:</label>
              <select>
                <option>Chuyển giao</option>
                <option>Nâng cấp</option>
                <option>Bảo trì</option>
              </select>
            </div>
            <div className="space-popup">
              <label>Bộ phận quản lý:</label>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
              Hủy
            </button>
          </div>
          <div className="popup-column">
            <div className="space-popup">
              <label>Tên đơn vị:</label>
              <input type="text" placeholder="Nhập tài khoản" />
            </div>
            <div className="space-popup">
              <label>Sản phẩm:</label>
              <select>
                <option>SP01</option>
                <option>SP02</option>
                <option>SP03</option>
              </select>
            </div>
            <div className="space-popup">
              <label>Giá trị hợp đồng:</label>
              <input type="text" placeholder="Nhập bộ phận quản lý" />
            </div>
            <div className="space-popup">
              <label>Cán bộ ghi nhận:</label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <button className="btn btn-primary">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDelete;
