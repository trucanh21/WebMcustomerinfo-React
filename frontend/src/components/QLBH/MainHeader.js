import React, { useState } from 'react';
import '../../assets/css/MainHeader.css';
import logoAdmin from '../../assets/img/profile.jpg';

const MainHeader = ({ onSearch }) => { // Nhận onSearch từ prop
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value); // Gọi onSearch khi người dùng nhập tìm kiếm
  };

  return (
    <div className="main-header">
      <nav>
        <div className="container-fluid">
          <div className="box">
            <div className="container-1">
              <span className="icon"><ion-icon name="search"></ion-icon></span>
              <input
                type="search"
                id="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>
          <ul className="main-header-ul">
            <li>
              <p>23/06/2024</p>
            </li>
            <li>
              <ion-icon name="notifications"></ion-icon>
            </li>
            <li>
              <a className="link-avt">
                <div className="avatar-sm">
                  <img src={logoAdmin} className="avatar-img" alt="Profile" />
                </div>
                <span>
                  <span>Hi!</span>
                  <span>Lan Tạ</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          padding: 8px 12px;
          z-index: 1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default MainHeader;
