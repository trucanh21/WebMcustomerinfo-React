<<<<<<< HEAD
import React from "react";
import MainHeader from "../../components/QLSP/MainHeader";
import Container from "../../components/QLSP/Container";
import "../../assets/css/MainPanel.css";
=======
import React, { useState } from 'react';
import MainHeader from '../../components/QLSP/MainHeader';
import Container from '../../components/QLSP/Container';
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
      <MainHeader onSearch={handleSearch} />
      <Container searchTerm={searchTerm} />
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
