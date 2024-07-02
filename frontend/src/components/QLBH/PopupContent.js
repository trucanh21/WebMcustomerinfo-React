import React, { useState, useEffect } from 'react';
import '../../assets/css/Popup.css';
import { fetchTypeContract } from '../../features/apiCalls';

const PopupShow = ({ onClose }) => {
  const [typeContracts, setTypeContracts] = useState([]);

  useEffect(() => {
    const loadTypeContracts = async () => {
      try {
        const data = await fetchTypeContract();
        setTypeContracts(data);
      } catch (error) {
        console.error('Error fetching type contracts:', error);
      }
    };

    loadTypeContracts();
  }, []);

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm hợp đồng</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <div className="popup-column column1">
            <div className="space-popup">
              <label>Mã BH:</label>
              <input type="text" />
            </div>
            <div className="space-popup">
              <label>Ngày nhập:</label>
              <input type="text" placeholder="Nhập tên đơn vị" />
            </div>
            <div className="space-popup">
              <label>Loại hợp đồng:</label>
              <select>
                {typeContracts.map((typeContract) => (
                  <option key={typeContract.LHD_ID} value={typeContract.LHD_ID}>
                    {typeContract.LHD_NAME}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-popup">
              <label>Bộ phận quản lý:</label>
              <input className='sanpham' type="text" placeholder="Nhập số điện thoại" />
            </div>
          </div>
          <div className="popup-column">
            <div className="space-popup">
              <label>Tên đơn vị:</label>
              <input className='sanpham' type="text" placeholder="Nhập tài khoản" />
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
              <input className='sanpham' type="text" placeholder="Nhập bộ phận quản lý" />
            </div>
            <div className="space-popup">
              <label>Cán bộ ghi nhận:</label>
              <input className='sanpham' type="text" placeholder="Nhập địa chỉ" />
            </div>
          </div>
        </div>
        <div className='button-popup'>
              <button type="submit" className="btn btn-primary">Thêm</button>
              <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
                Hủy
              </button>
        </div>
      </div>
    </div>
  );
};

export default PopupShow;
