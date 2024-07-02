import React from 'react';
import '../../assets/css/Container.css';
import '../../assets/css/Popup.css';
import Popup from 'reactjs-popup';
import PopupContent from '../../components/QLSP/PopupContent'; 
import PopupDelete from '../../components/QLSP/PopupDelete';

const Container = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý sản phẩm</h3>
          <div className="page-header-button">
            <Popup trigger = {
            <button className="button-header">
              <div className="button-add-export">
                <span className="button-icon"><ion-icon name="person-add"></ion-icon></span>
                <span className="button-text">Thêm sản phẩm</span>
              </div>
            </button>} modal nested>
              {close => <PopupContent onClose={close} />}
              </Popup>
            {/* <button className="button-header">
              <div className="button-add-export">
                <span className="button-icon"><ion-icon name="download-sharp"></ion-icon></span>
                <span className="button-text">Xuất excel</span>
              </div>
            </button> */}
          </div>
        </div>
        <div className="col-sm-12 sticky-table">
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Mã SP</th>
                  <th>Tên sản phẩm</th>
                  <th>Ngày nhập</th>
                  <th>Bộ phận quản lý</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SP1</td>
                  <td>Kinh phí nâng cấp phần mềm KTHC</td>
                  <td>10-10-2023</td>
                  <td>Văn phòng 1</td>
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
    </div>
  );
};

export default Container;
