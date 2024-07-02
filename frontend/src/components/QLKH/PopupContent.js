import React, { useState, useEffect } from 'react';
import { fetchProvinces, fetchDistrictsByProvince, fetchWardsByDistrict, addCustomer } from '../../features/apiCalls';
import '../../assets/css/Popup.css';

const PopupShow = ({ onClose }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [formData, setFormData] = useState({
    KH_Ten: '',
    KH_DaiDien: '',
    KH_SDT: '',
    KH_TaiKhoan: '',
    KH_PLDonVi: '',
    KH_BPQuanLy: '',
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
    if (selectedProvince) {
      const province = provinces.find(prov => prov.name === selectedProvince);
      if (province) {
        fetchDistrictsByProvince(province.province_id)
          .then(data => {
            setDistricts(data);
            setWards([]);
          })
          .catch(error => {
            console.error('There was an error fetching the districts!', error);
          });
      }
    }
  }, [selectedProvince, provinces]);

  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find(dist => dist.name === selectedDistrict);
      if (district) {
        fetchWardsByDistrict(district.district_id)
          .then(data => {
            setWards(data);
          })
          .catch(error => {
            console.error('There was an error fetching the wards!', error);
          });
      }
    }
  }, [selectedDistrict, districts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      ...formData,
      KH_DiaChi: `${selectedWard} - ${selectedDistrict} - ${selectedProvince}`
    };

    addCustomer(customerData)
      .then(response => {
        console.log('Customer added successfully', response);
        onClose();
      })
      .catch(error => {
        console.error('There was an error adding the customer!', error);
      });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm khách hàng</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit} >
            <div className='test'>
              <div className="popup-column column1">
                <div className="space-popup">
                  <label>Tên đơn vị:</label>
                  <input type="text" name="KH_Ten" placeholder="Nhập tên đơn vị" value={formData.KH_Ten} onChange={handleInputChange} />
                </div>
                <div className="space-popup">
                  <label>Đại diện:</label>
                  <input type="text" name="KH_DaiDien" placeholder="Nhập đại diện" value={formData.KH_DaiDien} onChange={handleInputChange} />
                </div>
                <div className="space-popup">
                  <label>Điện thoại:</label>
                  <input type="text" name="KH_SDT" placeholder="Nhập số điện thoại" value={formData.KH_SDT} onChange={handleInputChange} />
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
                  <label>Bộ phận quản lý:</label>
                  <input type="text" name="KH_BPQuanLy" placeholder="Nhập bộ phận quản lý" value={formData.KH_BPQuanLy} onChange={handleInputChange} />
                </div>
                <div className="space-popup">
                  <label>Tài khoản:</label>
                  <input type="text" name="KH_TaiKhoan" placeholder="Nhập tài khoản" value={formData.KH_TaiKhoan} onChange={handleInputChange} />
                </div>
              </div>
              </div>
            <div className='GroupProvince'>
              <div className="space-popup">
                <label>Tỉnh thành phố:</label>
                <select className='province' value={selectedProvince} onChange={e => setSelectedProvince(e.target.value)}>
                  <option value=''>Chọn tỉnh thành</option>
                  {provinces.map(province => (
                    <option key={province.province_id} value={province.name}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Quận Huyện:</label>
                <select className='districts' value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} disabled={!selectedProvince}>
                  <option value=''>Chọn quận huyện</option>
                  {districts.map(district => (
                    <option key={district.district_id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Phường Xã:</label>
                <select className='wards' value={selectedWard} onChange={e => setSelectedWard(e.target.value)} disabled={!selectedDistrict}>
                  <option value=''>Chọn phường xã</option>
                  {wards.map(ward => (
                    <option key={ward.wards_id} value={ward.name}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='button-popup'>
              <button type="submit" className="btn btn-primary">Thêm</button>
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

export default PopupShow;
