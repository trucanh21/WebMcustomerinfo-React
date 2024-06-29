import React from 'react';
import MainHeader from '../QLBH/MainHeader';
import Container from '../QLBH/Container';
import '../../assets/css/MainPanel.css';

const MainPanel = () => {
  return (
    <div className="mainPanel">
      <MainHeader />
      <Container />
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
