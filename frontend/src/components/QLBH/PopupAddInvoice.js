import React, { useState, useEffect } from 'react';
import '../../assets/css/Popup.css';
import { addInvoice, updateContractInvoice } from '../../features/apiCalls';

const PopupInvoice = ({ onClose, contract }) => {
  const [formData, setFormData] = useState({
    HD_ID: contract?.HD_ID || '',
    HoaD_Ngay: '',
    HoaD_GiaTriHopDong: contract?.HD_GiaTri || '',
    HoaD_BoPhanQuanLy: contract?.SP_BPQuanLy || '',
    HoaD_HienTrangThanhToan: '',
    HoaD_NgayThanhToan: '',
  });

  useEffect(() => {
    if (contract) {
      setFormData({
        HD_ID: contract.HD_ID,
        HoaD_GiaTriHopDong: contract.HD_GiaTri,
        HoaD_BoPhanQuanLy: contract.SP_BPQuanLy,
        HoaD_HienTrangThanhToan: '',
        HoaD_NgayThanhToan: '',
      });
    }
  }, [contract]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input change:', name, value); // Debugging
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInvoice(formData); // Add the invoice first
      await updateContractInvoice(formData.HD_ID, {
        ...contract,
        // Add any additional fields to update in the contract here
      }); // Update the contract with the same ID
      onClose(); // Close the popup on successful addition and update
    } catch (error) {
      console.error('Error adding invoice or updating contract', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  if (!contract) {
    return null; // Return null if contract is null to prevent rendering
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm hóa đơn</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="popup-body">
            <div className="popup-column column1">
              <div className="space-popup">
                <label>Mã hóa đơn:</label>
                <input className="mahoadon" name="HD_ID" value={formData.HD_ID} type="text" placeholder="Nhập giá trị hợp đồng" onChange={handleInputChange} readOnly />
              </div>
              <div className="space-popup">
                <label>Ngày xuất:</label>
                <input name="HoaD_Ngay" value={formData.HoaD_Ngay} type="date" onChange={handleInputChange} />
              </div>
            </div>
            <div className="popup-column">
              <div className="space-popup">
                <label>Giá trị hợp đồng:</label>
                <input className="GiaTriHopDong" name="HoaD_GiaTriHopDong" value={formData.HoaD_GiaTriHopDong} type="text" placeholder="Nhập giá trị hợp đồng" onChange={handleInputChange} readOnly />
              </div>
              <div className="space-popup">
                <label>Bộ phận quản lý:</label>
                <input className="BoPhanQuanLy" type="text" name="HoaD_BoPhanQuanLy" value={formData.HoaD_BoPhanQuanLy} onChange={handleInputChange} readOnly />
              </div>
              <div className="space-popup">
                <label className="label-note">Hiện trạng thanh toán:</label>
                <select name="HoaD_HienTrangThanhToan" value={formData.HoaD_HienTrangThanhToan} onChange={handleInputChange}>
                  <option value={''}>Chọn hiện trạng thanh toán</option>
                  <option value={'Chưa thanh toán'}>Chưa thanh toán</option>
                  <option value={'Đã thanh toán'}>Đã thanh toán</option>
                </select>
              </div>
              <div className="space-popup">
                <label className="label-note">Ngày thanh toán:</label>
                <input className="NgayThanhToan" type="date" name="HoaD_NgayThanhToan" value={formData.HoaD_NgayThanhToan} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="button-popup">
            <button type="submit" className="btn btn-primary">Thêm</button>
            <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupInvoice;
