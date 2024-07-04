import React from "react";
import MainHeader from "../../components/QLBT/MainHeader";
import Container from "../../components/QLBT/Container";
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
