import React, { useState, useEffect } from 'react';
import '../../assets/css/Container.css';
import '../../assets/css/Popup.css';
import Popup from 'reactjs-popup';
import PopupContent from '../../components/QLKH/PopupContent'; 
import PopupEdit from '../../components/QLKH/PopupEdit';
// import PopupDelete from '../../components/QLKH/PopupDelete';
import { fetchCustomers } from '../../features/apiCalls';

const Container = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State to hold selected customer
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const customersData = await fetchCustomers();
        setCustomers(customersData);
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    getCustomers();
  }, []);

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer); // Set the selected customer
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý khách hàng</h3>
          <div className="page-header-button">
            <Popup trigger={
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
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Mã KH</th>
                  <th>Tên đơn vị</th>
                  <th>Đại diện</th>
                  <th>Điện thoại</th>
                  <th>Tài khoản</th>
                  <th>Phân loại đơn vị</th>
                  <th>Địa chỉ</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.KH_ID}>
                    <td>{customer.KH_ID}</td>
                    <td>{customer.KH_Ten}</td>
                    <td>{customer.KH_DaiDien}</td>
                    <td>{customer.KH_SDT}</td>
                    <td>{customer.KH_TaiKhoan}</td>
                    <td>{customer.KH_PLDonVi}</td>
                    <td>{customer.KH_DiaChi}</td>
                    <td>
                      <ion-icon name="create" onClick={() => handleEditClick(customer)}></ion-icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isEditPopupOpen && (
        <Popup open={isEditPopupOpen} onClose={closeEditPopup} modal nested>
          {close => <PopupEdit onClose={closeEditPopup} customer={selectedCustomer} />}
        </Popup>
      )}
    </div>
  );
};

export default Container;
