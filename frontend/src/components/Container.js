import React from 'react';
import '../assets/css/Container.css';
import '../assets/css/Popup.css';

import Popup from 'reactjs-popup';
import PopupContent from './PopupContent'; 
import PopupDelete from './PopupDelete';

const Container = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý khách hàng</h3>
          <div className="page-header-button">
            <Popup trigger = {
            <button className="button-header">
              <div className="button-add-export">
                <span className="button-icon"><ion-icon name="person-add"></ion-icon></span>
                <span className="button-text">Thêm khách hàng</span>
              </div>
            </button>} modal nested>
              {close => <PopupContent onClose={close} />}
              </Popup>
            <button className="button-header">
              <div className="button-add-export">
                <span className="button-icon"><ion-icon name="download-sharp"></ion-icon></span>
                <span className="button-text">Xuất excel</span>
              </div>
            </button>
          </div>
        </div>
        <div className="col-sm-12 sticky-table">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Mã KH</th>
                <th>Tên đơn vị</th>
                <th>Đại diện</th>
                <th>Điện thoại</th>
                <th>Tài khoản</th>
                <th>Phân loại đơn vị</th>
                <th>Bộ phận quản lý</th>
                <th>Địa chỉ</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KH1</td>
                <td>Phòng Kinh tế và Hạ tầng huyện Gò Quao</td>
                <td>Lý Hoàng Nhủ</td>
                <td>0946 902 617</td>
                <td>9523.3.1018028 Tại KBNN Gò Quao</td>
                <td>Giáo dục</td>
                <td>Tỉnh</td>
                <td>Tân Đức, Đầm Dơi, Cà Mau</td>
                <Popup trigger = {<td>
                  <ion-icon name="create"></ion-icon></td>
                }modal nested>
              {close => <PopupDelete onClose={close} />}
              </Popup>
              </tr>
              {/* More rows... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Container;
