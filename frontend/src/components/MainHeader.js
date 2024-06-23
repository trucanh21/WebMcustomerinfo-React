import React from 'react';
import '../assets/css/MainHeader.css';
import logoAdmin from '../assets/img/profile.jpg'

const MainHeader = () => {
  return (
    <div className="main-header">
      <nav>
        <div className="container-fluid">
          <div class="box">
              <div class="container-1">
                  <span class="icon"><ion-icon name="search"></ion-icon></span>
                  <input type="search" id="search" placeholder="Search..." />
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
                  <img src={logoAdmin} className="avatar-img"/>
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
