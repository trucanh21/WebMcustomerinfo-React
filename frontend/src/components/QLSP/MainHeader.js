<<<<<<< HEAD
import React from "react";
import "../../assets/css/MainHeader.css";
import logoAdmin from "../../assets/img/profile.jpg";




=======
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
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d

  return (
    <div className="main-header">
      <nav>
        <div className="container-fluid">
<<<<<<< HEAD
          <div class="box">
            <div class="container-1">
              <span class="icon">
                <ion-icon name="search"></ion-icon>
              </span>
              <input type="search" id="search" placeholder="Search..." />
            </div>
          </div>

=======
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
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
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
<<<<<<< HEAD
                  <img src={logoAdmin} className="avatar-img" />
=======
                  <img src={logoAdmin} className="avatar-img" alt="Admin Profile" />
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
                </div>
                <span>
                  <span>Hi!</span>
                  <span>LanTạ</span>
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
