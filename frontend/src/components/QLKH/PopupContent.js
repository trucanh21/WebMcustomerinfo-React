import React, { useState, useEffect } from "react";
import {
  fetchProvinces,
  fetchDistrictsByProvince,
  fetchWardsByDistrict,
  addCustomer,
} from "../../features/apiCalls";
import "../../assets/css/Popup.css";

const PopupShow = ({ onClose }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    KH_Ten: "",
    KH_DaiDien: "",
    KH_SDT: "",
    KH_TaiKhoan: "",
    KH_PLDonVi: "",
=======
    KH_Ten: '',
    KH_DaiDien: '',
    KH_SDT: '',
    KH_TaiKhoan: '',
    KH_PLDonVi: '',
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
  });

  useEffect(() => {
    fetchProvinces()
      .then((data) => {
        setProvinces(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the provinces!", error);
      });
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetchDistrictsByProvince(selectedProvince)
<<<<<<< HEAD
        .then((data) => {
          setDistricts(data);
          setWards([]);
          setSelectedDistrict("");
          setSelectedWard("");
        })
        .catch((error) => {
          console.error("There was an error fetching the districts!", error);
=======
        .then(data => {
          setDistricts(data);
          setWards([]);
          setSelectedDistrict('');
          setSelectedWard('');
        })
        .catch(error => {
          console.error('There was an error fetching the districts!', error);
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
        });
    } else {
      setDistricts([]);
      setWards([]);
<<<<<<< HEAD
      setSelectedDistrict("");
      setSelectedWard("");
=======
      setSelectedDistrict('');
      setSelectedWard('');
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      fetchWardsByDistrict(selectedDistrict)
<<<<<<< HEAD
        .then((data) => {
          setWards(data);
          setSelectedWard("");
        })
        .catch((error) => {
          console.error("There was an error fetching the wards!", error);
        });
    } else {
      setWards([]);
      setSelectedWard("");
=======
        .then(data => {
          setWards(data);
          setSelectedWard('');
        })
        .catch(error => {
          console.error('There was an error fetching the wards!', error);
        });
    } else {
      setWards([]);
      setSelectedWard('');
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
    }
  }, [selectedDistrict]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      ...formData,
      KH_ProvinceID: selectedProvince,
      KH_DistrictID: selectedDistrict,
      KH_WardsID: selectedWard,
<<<<<<< HEAD
      KH_DiaChi: `${selectedWard} - ${selectedDistrict} - ${selectedProvince}`,
=======
      KH_DiaChi: `${selectedWard} - ${selectedDistrict} - ${selectedProvince}`
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
    };

    addCustomer(customerData)
      .then((response) => {
        console.log("Customer added successfully", response);
        onClose();
      })
      .catch((error) => {
        console.error("There was an error adding the customer!", error);
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
<<<<<<< HEAD
          <form onSubmit={handleSubmit}>
            <div className="test">
              <div className="popup-column column1">
                <div className="space-popup">
                  <label>Tên đơn vị:</label>
                  <input
                    type="text"
                    name="KH_Ten"
                    placeholder="Nhập tên đơn vị"
                    value={formData.KH_Ten}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-popup">
                  <label>Đại diện:</label>
                  <input
                    type="text"
                    name="KH_DaiDien"
                    placeholder="Nhập đại diện"
                    value={formData.KH_DaiDien}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-popup">
                  <label>Điện thoại:</label>
                  <input
                    type="text"
                    name="KH_SDT"
                    placeholder="Nhập số điện thoại"
                    value={formData.KH_SDT}
                    onChange={handleInputChange}
                  />
=======
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
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
                </div>
              </div>
              <div className="popup-column">
                <div className="space-popup">
                  <label>Phân loại đơn vị:</label>
<<<<<<< HEAD
                  <select
                    name="KH_PLDonVi"
                    value={formData.KH_PLDonVi}
                    onChange={handleInputChange}
                  >
=======
                  <select name="KH_PLDonVi" value={formData.KH_PLDonVi} onChange={handleInputChange}>
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
                    <option>Giáo dục</option>
                    <option>Y tế</option>
                    <option>Tư pháp</option>
                    <option>Hành chính</option>
                  </select>
                </div>
                <div className="space-popup">
                  <label>Tài khoản:</label>
<<<<<<< HEAD
                  <input
                    type="text"
                    name="KH_TaiKhoan"
                    placeholder="Nhập tài khoản"
                    value={formData.KH_TaiKhoan}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="GroupProvince">
              <div className="space-popup">
                <label>Tỉnh thành phố:</label>
                <select
                  className="province"
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="">Chọn tỉnh thành</option>
                  {provinces.map((province) => (
                    <option
                      key={province.province_id}
                      value={province.province_id}
                    >
=======
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
                    <option key={province.province_id} value={province.province_id}>
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Quận Huyện:</label>
<<<<<<< HEAD
                <select
                  className="districts"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  disabled={!selectedProvince}
                >
                  <option value="">Chọn quận huyện</option>
                  {districts.map((district) => (
                    <option
                      key={district.district_id}
                      value={district.district_id}
                    >
=======
                <select className='districts' value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} disabled={!selectedProvince}>
                  <option value=''>Chọn quận huyện</option>
                  {districts.map(district => (
                    <option key={district.district_id} value={district.district_id}>
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Phường Xã:</label>
<<<<<<< HEAD
                <select
                  className="wards"
                  value={selectedWard}
                  onChange={(e) => setSelectedWard(e.target.value)}
                  disabled={!selectedDistrict}
                >
                  <option value="">Chọn phường xã</option>
                  {wards.map((ward) => (
=======
                <select className='wards' value={selectedWard} onChange={e => setSelectedWard(e.target.value)} disabled={!selectedDistrict}>
                  <option value=''>Chọn phường xã</option>
                  {wards.map(ward => (
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
                    <option key={ward.wards_id} value={ward.wards_id}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="button-popup">
              <button type="submit" className="btn btn-primary">
                Thêm
              </button>
              <button
                type="button"
                className="ml-2 btn btn-danger"
                onClick={onClose}
              >
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
