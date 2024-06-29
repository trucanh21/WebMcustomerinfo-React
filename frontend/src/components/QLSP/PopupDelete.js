import React from 'react';
import '../../assets/css/Popup.css';

const PopupDelete = ({ onClose  }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Cập nhật sản phẩm</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <div className="popup-column">
            <div className="space-popup">
              <label>Mã SP:</label>
              <input type="text"/>
            </div>
            <div className="space-popup">
              <label>Tên sản phẩm:</label>
              <input type="text" placeholder="Nhập tên sản phẩm" />
            </div>

            <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
              Hủy
            </button>
          </div>
          <div className="popup-column">
            <div className="space-popup">
              <label>Ngày nhập:</label>
              <input type="text" placeholder="Ngày nhập" />
            </div>
            <div className="space-popup">
              <label>Bộ phận quản lý:</label>
              <input type="text" placeholder="Nhập bộ phận quản lý" />
            </div>
            <button className="btn btn-primary">Thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDelete;
