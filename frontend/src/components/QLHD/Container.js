import React from 'react';
import '../../assets/css/Container.css';
// import '../../assets/css/Popup.css';
// import Popup from 'reactjs-popup';
// import PopupContent from '../QLBH/PopupContent'; 
// import PopupDelete from '../QLBH/PopupDelete';

const Container = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý hóa đơn</h3>
          {/* <div className="page-header-button">
            <Popup trigger = {
            <button className="button-header">
              <div className="button-add-export">
                <span className="button-icon"><ion-icon name="person-add"></ion-icon></span>
                <span className="button-text">Thêm sản phẩm</span>
              </div>
            </button>} modal nested>
              {close => <PopupContent onClose={close} />}
            </Popup>
          </div> */}

        </div>
        <div className="col-sm-12 sticky-table">
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Mã HD</th>
                  <th>Mã BH</th>
                  <th>Ngày xuất</th>
                  <th>Giá trị</th>
                  <th>Bộ phận quản lý</th>
                  <th>Hiện trạng thanh toán</th>
                  <th>Ngày thanh toán</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HD1</td>
                  <td>BH1</td>
                  <td>10-10-2023</td>
                  <td>17.000.000</td>
                  <td>Văn phòng 1</td>
                  <td>Chưa xuất</td>
                  <td>10-11-2023</td>
                  {/* <Popup trigger = {<td>
                    <ion-icon name="create"></ion-icon></td>
                  }modal nested>
                {close => <PopupDelete onClose={close} />}
                  </Popup> */}
                </tr>
                {/* More rows... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
