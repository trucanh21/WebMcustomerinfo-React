import React, { useState, useEffect, useCallback } from 'react';
import '../../assets/css/Container.css';
import '../../assets/css/Popup.css';
import Popup from 'reactjs-popup';
import PopupContent from '../QLBH/PopupContent';
import { fetchContracts } from '../../features/apiCalls';

const Container = ({ searchTerm }) => {
  const [contracts, setContracts] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDateInvoice, setStartDateInvoice] = useState(''); // Renamed
  const [endDateInvoice, setEndDateInvoice] = useState(''); // Renamed

  const getContracts = useCallback(async () => {
    try {
      const contractsData = await fetchContracts({ fromDate: startDate, toDate: endDate, fromDateInvoice: startDateInvoice, toDateInvoice: endDateInvoice, KH_Ten: searchTerm });
      setContracts(contractsData);
    } catch (error) {
      console.error('Error fetching contracts', error);
    }
  }, [startDate, endDate, startDateInvoice, endDateInvoice, searchTerm]);

  useEffect(() => {
    getContracts();
  }, [getContracts, searchTerm]);

  const handleFilterContractSubmit = (e) => {
    e.preventDefault();
    getContracts();
  };

  const handleFilterInvoiceSubmit = (e) => {
    e.preventDefault();
    getContracts();
  };

  const isOneYearPassed = (date, LHD_ID, HD_HienTrang) => {
    const contractDate = new Date(date);
    const currentDate = new Date();

    // Calculate deadline based on LHD_ID
    let deadlineDate = new Date(contractDate);
    if (LHD_ID === 1) {
      deadlineDate.setDate(deadlineDate.getDate() + 30);
    } else if (LHD_ID === 2 || LHD_ID === 3) {
      deadlineDate.setDate(deadlineDate.getDate() + 60);
    }

    // Check if one year has passed
    const oneYearPassed = currentDate > new Date(contractDate.setFullYear(contractDate.getFullYear() + 1));

    // Check if it's time to issue an invoice
    const issueInvoiceTime = (LHD_ID === 1 && HD_HienTrang === 'Chưa xuất hóa đơn' && currentDate > new Date(deadlineDate))
      || ((LHD_ID === 2 || LHD_ID === 3) && HD_HienTrang === 'Chưa xuất hóa đơn' && currentDate > new Date(deadlineDate));

    return {
      oneYearPassed,
      issueInvoiceTime,
    };
  };

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
        <div className='filter'>
          <form onSubmit={handleFilterContractSubmit}>
            <div className='filter-contract'>
              <p className='header-filter'>Khách hàng hết hạn bảo trì chưa ký hợp đồng:</p>
              <div className='start space'>
                <label>Từ ngày</label>
                <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} className='date_contract' />
              </div>
              <div className='end space'>
                <label>Đến ngày</label>
                <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} className='date_contract' />
              </div>
              <div className='button-filter space'>
                <button type="submit" className="btn_filter">Lọc</button>
              </div>
            </div>
          </form>
          <form onSubmit={handleFilterInvoiceSubmit}>
            <div className='filter-invoice'>
              <p className='header-filter'>Hợp đồng bảo trì chưa xuất hóa đơn:</p>
              <div className='start space'>
                <label>Từ ngày</label>
                <input type='date' value={startDateInvoice} onChange={(e) => setStartDateInvoice(e.target.value)} className='date_contract' />
              </div>
              <div className='end space'>
                <label>Đến ngày</label>
                <input type='date' value={endDateInvoice} onChange={(e) => setEndDateInvoice(e.target.value)} className='date_contract' />
              </div>
              <div className='button-filter space'>
                <button type="submit" className="btn_filter">Lọc</button>
              </div>
            </div>
          </form>
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
                    <td>{contract.QT_ID}</td>
                    <td>{contract.HD_HienTrang}</td>
                    <td>{contract.HD_Note}</td>
                    <td>
                      <div className='group-container'>
                        {isOneYearPassed(contract.HD_Ngay, contract.LHD_ID, contract.HD_HienTrang).issueInvoiceTime && <ion-icon name="reader"></ion-icon>}
                        {isOneYearPassed(contract.HD_Ngay, contract.LHD_ID, contract.HD_HienTrang).oneYearPassed && <ion-icon name="build"></ion-icon>}
                      </div>
                    </td>
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
