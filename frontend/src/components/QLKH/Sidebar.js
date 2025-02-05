import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Sidebar.css';

//import link img 
import LogoDTSoft from '../../assets/img/LogoDTSoft.png';
import iconQLSP from '../../assets/img/icon/gift.png';
import iconQLBH from '../../assets/img/icon/contract.png';
import iconQLHD from '../../assets/img/icon/payment.png';
import iconQLBT from '../../assets/img/icon/work.png';


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
        <Link to="/qlkh" className='logo'>
          <img
            src={LogoDTSoft}
            alt="navbar brand"
            className="navbar-brand"
            height="70"
          />
        </Link>
      </div>
      <div className="sidebar-content">
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <Link to="/qlkh" className='choose-menu'>
              <ion-icon name="people-outline"></ion-icon>
              <p className="header-menu">Quản lý khách hàng</p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/qlsp">
              <img src={iconQLSP} className="icon-sidebar" />
              <p className="header-menu">Quản lý sản phẩm</p>
            </Link>
          </li>
          <li className="nav-item active">
           <Link to="/qlbh">
              <img src={iconQLBH} className="icon-sidebar" />
              <p className="header-menu">Quản lý bảo hành</p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/qlhd">
              <img src={iconQLHD} className="icon-sidebar" />
              <p className="header-menu">Quản lý hóa đơn</p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/qlbt">
              <img src={iconQLBT} className="icon-sidebar" />
              <p className="header-menu">Quản lý bảo trì</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
