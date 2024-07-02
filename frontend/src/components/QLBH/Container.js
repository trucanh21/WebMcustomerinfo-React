import React from 'react';
import '../../assets/css/Container.css';
import '../../assets/css/Popup.css';
import Popup from 'reactjs-popup';
import PopupContent from '../QLBH/PopupContent'; 
import PopupDelete from '../QLBH/PopupDelete';

const Container = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý bảo hành</h3>
          <div className="page-header-button">
            <Popup trigger = {
            <button className="button-header">
              <div className="button-add-export">
                <span className="button-icon"><ion-icon name="person-add"></ion-icon></span>
                <span className="button-text">Thêm bảo hành</span>
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
                  <th>Mã BH</th>
                  <th>Tên đơn vị</th>
                  <th>Ngày nhập</th>
                  <th>Tên sản phẩm</th>
                  <th>Loại hợp đồng</th>
                  <th>Giá trị hợp đồng</th>
                  <th>Bộ phận quản lý</th>
                  <th>Cán bộ ghi nhận</th>
                  <th>HT xuất hóa đơn</th>
                  <th>Ghi chú</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BH1</td>
                  <td>Trường THPT Hồ Thị Kỷ</td>
                  <td>10-10-2023</td>
                  <td>Kinh phí nâng cấp phần mềm KTHC</td>
                  <td>Chuyển giao</td>
                  <td>17000000</td>
                  <td>Giáo dục</td>
                  <td>Nguyễn Văn A</td>
                  <td>Đã xuất hóa đơn</td>
                  <td>không có</td>
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
