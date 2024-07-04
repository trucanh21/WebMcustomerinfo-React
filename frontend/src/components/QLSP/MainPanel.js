import React from "react";
import MainHeader from "../../components/QLSP/MainHeader";
import Container from "../../components/QLSP/Container";
import "../../assets/css/MainPanel.css";

const MainPanel = () => {
  return (
    <div className="mainPanel">
      {/* <MainHeader /> */}
      <Container />
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
