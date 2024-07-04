import React, { useState } from 'react';
import MainHeader from '../../components/QLSP/MainHeader';
import Container from '../../components/QLSP/Container';
import '../../assets/css/MainPanel.css';

const MainPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="mainPanel">
      <MainHeader onSearch={handleSearch} />
      <Container searchTerm={searchTerm} />
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
