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
          <h3>Quản lý bảo trì</h3>
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
                  <th>Mã BT</th>
                  <th>Mã BH</th>
                  <th>Ngày nhập</th>
                  <th>Tên sản phẩm</th>
                  <th>Cán bộ ghi nhận</th>
                  <th>Bộ phận quản lý</th>
                  <th>Nội dung</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>07-07-2024</td>
                  <td>Kinh phí Nâng cấp phần mềm KTHC</td>
                  <td>TaXuanLan</td>
                  <td>Văn phòng 4</td>
                  <td>Sửa nhanh</td>
                  <td>không có</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>21</td>
                  <td>08-01-2024</td>
                  <td>Kinh phí Nâng cấp phần mềm CTT</td>
                  <td>TaXuanLan</td>
                  <td>Văn phòng 1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>5</td>
                  <td>02-03-2024</td>
                  <td>Kinh phí bảo trì phần mềm CIT</td>
                  <td>ChauHaiThong</td>
                  <td>Văn phòng 1</td>
                  <td>Sửa nhanh</td>
                  <td>không có</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>20</td>
                  <td>10-10-2023</td>
                  <td>Kinh phí phần mềm NTT</td>
                  <td>TaXuanLan</td>
                  <td>Văn phòng 2</td>
                  <td>Sửa nhanh</td>
                  <td>không có</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>16</td>
                  <td>10-10-2023</td>
                  <td>Kinh phí Nâng cấp phần mềm KTHC</td>
                  <td>VoThiKieuMy</td>
                  <td>Văn phòng 2</td>
                  <td>Sửa nhanh</td>
                  <td>không có</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>22</td>
                  <td>10-10-2023</td>
                  <td>Kinh phí Bảo trì phần mềm KTHC</td>
                  <td>TaXuanLan</td>
                  <td>Văn phòng 2</td>
                  <td>Sửa nhanh</td>
                  <td>không có</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>26</td>
                  <td>10-10-2023</td>
                  <td>Kinh phí Chuyển giao phần mềm Kế toán Hành chính Sự nghiệp</td>
                  <td>ChauHaiThong</td>
                  <td>Văn phòng 2</td>
                  <td>Sửa nhanh</td>
                  <td>không có</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
