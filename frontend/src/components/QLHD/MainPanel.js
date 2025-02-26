import React from "react";
import MainHeader from "../../components/QLHD/MainHeader";
import Container from "../../components/QLHD/Container";
import "../../assets/css/MainPanel.css";

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
