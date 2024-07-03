import React, { useState } from 'react';
import MainHeader from '../../components/QLKH/MainHeader'; // Đảm bảo đường dẫn chính xác
import Container from '../../components/QLKH/Container';
import '../../assets/css/MainPanel.css';

const MainPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="mainPanel">
      <MainHeader onSearch={handleSearch} /> {/* Thêm MainHeader và truyền handleSearch */}
      <Container searchTerm={searchTerm} /> {/* Truyền searchTerm xuống Container */}
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
