import React, { useEffect } from "react";
import "../../assets/css/MainHeader.css";
import logoAdmin from "../../assets/img/profile.jpg";

const MainHeader = () => {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("isLogin"));
  }, []);

  const logOut = () => {
    localStorage.removeItem("isLogin");
    window.location.href = "/login";
  };

  return (
    <div className="main-header">
      <nav>
        <div className="container-fluid">
          <div className="box">
            <div className="container-1">
              <span className="icon">
                <ion-icon name="search"></ion-icon>
              </span>
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
                <div className="dropdown">
                  <div className="avatar-sm">
                    <img src={logoAdmin} className="avatar-img" />
                  </div>
                  <div className="dropdown-content">
                    <button onClick={() => logOut()}> Logout</button>
                  </div>
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
