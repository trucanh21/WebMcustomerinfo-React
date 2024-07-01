import React, { useState, useEffect } from 'react';
import '../../assets/css/Container.css';
import '../../assets/css/Popup.css';
import Popup from 'reactjs-popup';
import PopupContent from '../QLBH/PopupContent';
import { fetchContract } from '../../features/apiCalls';

const Container = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const getContracts = async () => {
      try {
        const ContractsData = await fetchContract();
        setContracts(ContractsData);
      } catch (error) {
        console.error('Error fetching contracts', error);
      }
    };

    getContracts();
  }, []);

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý bảo hành</h3>
          <div className="page-header-button">
            <Popup trigger={
              <button className="button-header">
                <div className="button-add-export">
                  <span className="button-icon"><ion-icon name="person-add"></ion-icon></span>
                  <span className="button-text">Thêm bảo hành</span>
                </div>
              </button>} modal nested>
              {close => <PopupContent onClose={close} />}
            </Popup>
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
                {contracts.map((contract) => (
                  <tr key={contract.HD_ID}>
                    <td>{contract.HD_ID}</td>
                    <td>{contract.KH_Ten}</td>
                    <td>{contract.HD_Ngay}</td>
                    <td>{contract.SP_Ten}</td>
                    <td>{contract.LHD_ID}</td>
                    <td>{contract.HD_GiaTri}</td>
                    <td>{contract.SP_BPQuanLy}</td>
                    <td>{contract.HD_CBGhiNhanDoanhSo}</td>
                    <td>{contract.HD_HienTrang}</td>
                    <td>{contract.HD_Note}</td>
                    <td><ion-icon name="create"></ion-icon></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
