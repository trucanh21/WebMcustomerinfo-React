import React from 'react';
import MainHeader from './MainHeader';
import Container from './Container';
import '../assets/css/MainPanel.css';

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
