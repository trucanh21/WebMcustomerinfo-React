import React from 'react';
import Sidebar from "../components/QLKH/Sidebar";
import MainPanel from "../components/QLKH/MainPanel";
import '../assets/css/QLKH.css';

const QLKH = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default QLKH;
