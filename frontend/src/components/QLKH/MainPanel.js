<<<<<<< HEAD
import React from "react";
import MainHeader from "../../components/QLKH/MainHeader";
import Container from "../../components/QLKH/Container";
import "../../assets/css/MainPanel.css";
=======
import React, { useState } from 'react';
import MainHeader from '../../components/QLKH/MainHeader'; // Đảm bảo đường dẫn chính xác
import Container from '../../components/QLKH/Container';
import '../../assets/css/MainPanel.css';
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d

const MainPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="mainPanel">
<<<<<<< HEAD
      {/* <MainHeader /> */}
      <Container />
=======
      <MainHeader onSearch={handleSearch} /> {/* Thêm MainHeader và truyền handleSearch */}
      <Container searchTerm={searchTerm} /> {/* Truyền searchTerm xuống Container */}
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
