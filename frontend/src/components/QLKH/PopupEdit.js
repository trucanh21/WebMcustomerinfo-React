import React, { useState, useEffect } from 'react';
import { fetchProvinces, fetchDistrictsByProvince, fetchWardsByDistrict, updateCustomer } from '../../features/apiCalls';
import '../../assets/css/Popup.css';

const PopupEdit = ({ onClose, customer }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState(customer.KH_ProvinceID || '');
  const [selectedDistrictId, setSelectedDistrictId] = useState(customer.KH_DistrictID || '');
  const [selectedWardId, setSelectedWardId] = useState(customer.KH_WardsID || '');
  const [formData, setFormData] = useState({
    KH_Ten: customer.KH_Ten,
    KH_DaiDien: customer.KH_DaiDien,
    KH_SDT: customer.KH_SDT,
    KH_TaiKhoan: customer.KH_TaiKhoan,
    KH_PLDonVi: customer.KH_PLDonVi,
    KH_BPQuanLy: customer.KH_BPQuanLy,
  });

  useEffect(() => {
    fetchProvinces()
      .then(data => {
        setProvinces(data);
      })
      .catch(error => {
        console.error('There was an error fetching the provinces!', error);
      });
  }, []);

  useEffect(() => {
    if (selectedProvinceId) {
      fetchDistrictsByProvince(selectedProvinceId)
        .then(data => {
          setDistricts(data);
          setWards([]);
        })
        .catch(error => {
          console.error('There was an error fetching the districts!', error);
        });
    }
  }, [selectedProvinceId]);

  useEffect(() => {
    if (selectedDistrictId) {
      fetchWardsByDistrict(selectedDistrictId)
        .then(data => {
          setWards(data);
        })
        .catch(error => {
          console.error('There was an error fetching the wards!', error);
        });
    }
  }, [selectedDistrictId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCustomer = {
      ...formData,
      KH_ProvinceID: selectedProvinceId,
      KH_DistrictID: selectedDistrictId,
      KH_WardsID: selectedWardId,
      KH_DiaChi: `${selectedWardId} - ${selectedDistrictId} - ${selectedProvinceId}`,
    };

    updateCustomer(customer.KH_ID, updatedCustomer)
      .then(response => {
        console.log('Customer updated successfully', response);
        onClose();
      })
      .catch(error => {
        console.error('There was an error updating the customer!', error);
      });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Chỉnh sửa khách hàng</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit}>
            <div className="test">
              <div className="popup-column column1">
                <div className="space-popup">
                  <label>Tên đơn vị:</label>
                  <input type="text" name="KH_Ten" value={formData.KH_Ten} onChange={handleInputChange} />
                </div>
                <div className="space-popup">
                  <label>Đại diện:</label>
                  <input type="text" name="KH_DaiDien" value={formData.KH_DaiDien} onChange={handleInputChange} />
                </div>
                <div className="space-popup">
                  <label>Điện thoại:</label>
                  <input type="text" name="KH_SDT" value={formData.KH_SDT} onChange={handleInputChange} />
                </div>
              </div>
              <div className="popup-column">
                <div className="space-popup">
                  <label>Phân loại đơn vị:</label>
                  <select name="KH_PLDonVi" value={formData.KH_PLDonVi} onChange={handleInputChange}>
                    <option>Giáo dục</option>
                    <option>Y tế</option>
                    <option>Tư pháp</option>
                    <option>Hành chính</option>
                  </select>
                </div>
                <div className="space-popup">
                  <label>Tài khoản:</label>
                  <input type="text" name="KH_TaiKhoan" value={formData.KH_TaiKhoan} onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="GroupProvince">
              <div className="space-popup">
                <label>Tỉnh thành phố:</label>
                <select value={selectedProvinceId} onChange={e => setSelectedProvinceId(e.target.value)}>
                  <option value="">Chọn tỉnh thành</option>
                  {provinces.map(province => (
                    <option key={province.province_id} value={province.province_id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Quận Huyện:</label>
                <select value={selectedDistrictId} onChange={e => setSelectedDistrictId(e.target.value)} disabled={!selectedProvinceId}>
                  <option value="">Chọn quận huyện</option>
                  {districts.map(district => (
                    <option key={district.district_id} value={district.district_id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Phường Xã:</label>
                <select value={selectedWardId} onChange={e => setSelectedWardId(e.target.value)} disabled={!selectedDistrictId}>
                  <option value="">Chọn phường xã</option>
                  {wards.map(ward => (
                    <option key={ward.wards_id} value={ward.wards_id}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="button-popup">
              <button type="submit" className="btn btn-primary">
                Cập nhật
              </button>
              <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;
