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
    KH_Ten: "",
    KH_DaiDien: "",
    KH_SDT: "",
    KH_TaiKhoan: "",
    KH_PLDonVi: "",
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
        .then((data) => {
          setDistricts(data);
          setWards([]);
          setSelectedDistrict("");
          setSelectedWard("");
        })
        .catch((error) => {
          console.error("There was an error fetching the districts!", error);
        });
    } else {
      setDistricts([]);
      setWards([]);
      setSelectedDistrict("");
      setSelectedWard("");
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      fetchWardsByDistrict(selectedDistrict)
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
      KH_DiaChi: `${selectedWard} - ${selectedDistrict} - ${selectedProvince}`,
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
                </div>
              </div>
              <div className="popup-column">
                <div className="space-popup">
                  <label>Phân loại đơn vị:</label>
                  <select
                    name="KH_PLDonVi"
                    value={formData.KH_PLDonVi}
                    onChange={handleInputChange}
                  >
                    <option>Giáo dục</option>
                    <option>Y tế</option>
                    <option>Tư pháp</option>
                    <option>Hành chính</option>
                  </select>
                </div>
                <div className="space-popup">
                  <label>Tài khoản:</label>
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
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Quận Huyện:</label>
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
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Phường Xã:</label>
                <select
                  className="wards"
                  value={selectedWard}
                  onChange={(e) => setSelectedWard(e.target.value)}
                  disabled={!selectedDistrict}
                >
                  <option value="">Chọn phường xã</option>
                  {wards.map((ward) => (
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
