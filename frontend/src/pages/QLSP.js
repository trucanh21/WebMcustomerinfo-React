import React from 'react';
import Sidebar from "../components/QLSP/Sidebar";
import MainPanel from "../components/QLSP/MainPanel";
import '../assets/css/QLKH.css';

const QLSP = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default QLSP;
