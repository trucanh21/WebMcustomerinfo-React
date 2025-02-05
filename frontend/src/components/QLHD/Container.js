import React, { useState, useEffect } from 'react';
import '../../assets/css/Container.css';
import { fetchInvoice } from '../../features/apiCalls';

const formatCurrency = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) {
    return '';
  }
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(undefined, options);
};

const Container = ({ searchTerm }) => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const invoicesData = await fetchInvoice();
        setInvoices(invoicesData);
        setFilteredInvoices(invoicesData);
      } catch (error) {
        console.error('Error fetching invoices', error);
      }
    };

    getInvoices();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = invoices.filter(invoice =>
        invoice.HD_ID.toString().includes(lowercasedTerm) ||
        invoice.HoaD_HienTrangThanhToan.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredInvoices(filtered);
    } else {
      setFilteredInvoices(invoices);
    }
  }, [searchTerm, invoices]);

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý hóa đơn</h3>
          <div className="page-header-button">
          </div>
        </div>
        <div className="col-sm-12 sticky-table">
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Mã HD</th>
                  <th>Ngày xuất</th>
                  <th>Giá trị</th>
                  <th>Bộ phận quản lý</th>
                  <th>Hiện trạng thanh toán</th>
                  <th>Ngày thanh toán</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.HoaD_ID}>
                    <td>{invoice.HD_ID}</td>
                    <td>{formatDate(invoice.HoaD_Ngay)}</td>
                    <td>{formatCurrency(invoice.HoaD_GiaTriHopDong)}</td>
                    <td>{invoice.HoaD_BoPhanQuanLy}</td>
                    <td>{invoice.HoaD_HienTrangThanhToan}</td>
                    <td>{formatDate(invoice.HoaD_NgayThanhToan)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Remove the following lines */}
      {/* {isPopupOpen && (
        <Popup open={isPopupOpen} onClose={closePopup} modal nested>
          {close => <PopupInvoice onClose={closePopup} />}
        </Popup>
      )} */}
    </div>
  );
};

export default Container;
