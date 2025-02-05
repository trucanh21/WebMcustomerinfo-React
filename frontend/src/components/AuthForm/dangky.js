
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../../assets/css/RegistrationForm.css";
import {
  authRegister,
  fetchDistrictsByProvince,
  fetchProvinces,
  fetchWardsByDistrict,
} from "../../features/apiCalls";
const RegistrationForm = () => {
  const [level, setLevel] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    province_id: "",
    district_id: "",
    wards_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle formData submission
    formData.district_id = selectedDistrict;
    formData.wards_id = selectedWard;
    formData.province_id = selectedProvince;
    console.log(formData);
    try {
      const authRegis = async () => {
        try {
          const auth = await authRegister(formData);
          window.location.href = "/login";
        } catch (error) {
          console.error("Error fetching customers", error);
        }
      };
      authRegis();
    } catch (error) {
      console.error("Error fetching customers", error);
    }
  };

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const provincesData = await fetchProvinces(selectedProvince);
        setProvinces(provincesData);
      } catch (error) {
        console.error("Error fetching customers", error);
      }
    };
    getProvinces();
    // getDistricts();
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
  return (
    <div className="login-container">
      <h1>Đăng Ký</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            name="username"
            placeholder="Nhập tên đăng nhập"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="location-fields GroupProvince">
          <div>
            <label>Tên tỉnh:</label>
            <select
              className="province"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">Chọn tỉnh thành</option>
              {provinces.map((province) => (
                <option key={province.province_id} value={province.province_id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Tên huyện:</label>
            <select value={selectedDistrict} className="districts " onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedProvince}>
              <option onChange={handleInputChange}>Chọn quận huyện</option>
              {districts.map((district) => (
                <option key={district.district_id} value={district.district_id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Tên xã:</label>
            <select
              className="wards "
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
        <div>
          <label>Phân cấp:</label>
          <select value={level} className="level" onChange={handleLevelChange} required>
            <option value="">Chọn cấp</option>
            <option value="commune">Xã</option>
            <option value="district">Huyện</option>
            <option value="province">Tỉnh</option>
          </select>
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <div className="login-link">
        Bạn đã có tài khoản ? <a href="/login">Đăng nhập</a>
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 30px;
          margin-top: 30px;
          font-size: 32px;
          text-align: center;
          color: #333;
        }
        .login-link {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }
        .login-link a {
          color: #0149cd;
          text-decoration: none;
        }
        .login-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default RegistrationForm;

