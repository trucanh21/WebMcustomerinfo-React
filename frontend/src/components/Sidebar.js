import React, { useEffect } from 'react';
import '../assets/css/Sidebar.css';

//import link img 
import LogoDTSoft from '../assets/img/LogoDTSoft.png';
import iconQLSP from '../assets/img/icon/gift.png';
import iconQLBH from '../assets/img/icon/contract.png';
import iconQLHD from '../assets/img/icon/payment.png';
import iconQLBT from '../assets/img/icon/work.png';


const Sidebar = () => {
  useEffect(() => {
    // Tạo một <script> element
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.setAttribute('nomodule', '');
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    script2.async = true;

    // Chèn các <script> vào <head> của trang
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Cleanup: Xóa các <script> khi component unmount
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <a href="index.html" className="logo">
          <img
            src={LogoDTSoft}
            alt="navbar brand"
            className="navbar-brand"
            height="70"
          />
        </a>
      </div>
      <div className="sidebar-content">
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <a href="">
              <ion-icon name="home-outline"></ion-icon>
              <p className="header-menu">Trang chủ</p>
            </a>
          </li>
          <li className="nav-item active">
            <a href="" className='choose-menu'>
              <ion-icon name="people-outline"></ion-icon>
              <p className="header-menu">Quản lý khách hàng</p>
            </a>
          </li>
          <li className="nav-item active">
            <a href="">
              <img src={iconQLSP} className="icon-sidebar" />
              <p className="header-menu">Quản lý sản phẩm</p>
            </a>
          </li>
          <li className="nav-item active">
            <a href="">
              <img src={iconQLBH} className="icon-sidebar" />
              <p className="header-menu">Quản lý bảo hành</p>
            </a>
          </li>
          <li className="nav-item active">
            <a href="">
              <img src={iconQLHD} className="icon-sidebar" />
              <p className="header-menu">Quản lý hóa đơn</p>
            </a>
          </li>
          <li className="nav-item active">
            <a href="">
              <img src={iconQLBT} className="icon-sidebar" />
              <p className="header-menu">Quản lý bảo trì</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
