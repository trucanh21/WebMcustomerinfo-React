import React, { useState } from 'react';
import '../../assets/css/MainHeader.css';
import logoAdmin from '../../assets/img/profile.jpg';

const MainHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
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
              <a className="link-avt" href="#">
                <div className="avatar-sm">
                  <img src={logoAdmin} className="avatar-img" alt="Admin Profile" />
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
    </div>
  );
};

export default MainHeader;
