import React, { useState, useEffect } from 'react';
import '../../assets/css/Popup.css';
import { addMaintenance, updateContractMaintenance } from '../../features/apiCalls';

const PopupInvoice = ({ onClose, contract }) => {
  const [formData, setFormData] = useState({
    HD_ID: contract?.HD_ID || '',
    SP_Ten: contract?.SP_Ten || '',
    BT_Ngay: '',
    BT_CanBoThucHien: '',
    BT_NoiDung: '',
  });

  useEffect(() => {
    if (contract) {
      setFormData({
        HD_ID: contract.HD_ID,
        SP_Ten: contract.SP_Ten,
        BT_Ngay: '',
        BT_CanBoThucHien: '',
        BT_NoiDung: '',
      });
    }
  }, [contract]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMaintenance(formData); // Ensure your API call is correctly named
      await updateContractMaintenance(formData.HD_ID);

      onClose(); // Close the popup on successful addition
    } catch (error) {
      console.error('Error adding maintenance', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm bảo trì</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="popup-body">
            <div className="popup-column column1">
              <div className="space-popup">
                <label>Mã hợp đồng:</label>
                <input className="mahopdong" name="HD_ID" value={formData.HD_ID} type="text" placeholder="Nhập giá trị hợp đồng" onChange={handleInputChange} readOnly />
              </div>
              <div className="space-popup">
                <label>Tên sản phẩm:</label>
                <input name="SP_Ten" value={formData.SP_Ten} type="text" onChange={handleInputChange} readOnly />
              </div>
            </div>
            <div className="popup-column">
              <div className="space-popup">
                <label>Ngày bảo trì:</label>
                <input className="ngaybaotri" name="BT_Ngay" value={formData.BT_Ngay} type="date" placeholder="Nhập giá trị hợp đồng" onChange={handleInputChange} />
              </div>
              <div className="space-popup">
                <label>Cán bộ thực hiện bảo trì:</label>
                <input type="text" placeholder='Nhập cán bộ thực hiện bảo trì' name="BT_CanBoThucHien" value={formData.BT_CanBoThucHien} onChange={handleInputChange} />
              </div>
              <div className="space-popup">
                <label className="label-note">Nội dung:</label>
                <input type="text" name="BT_NoiDung" placeholder='Nhập nội dung' value={formData.BT_NoiDung} onChange={handleInputChange} />
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
