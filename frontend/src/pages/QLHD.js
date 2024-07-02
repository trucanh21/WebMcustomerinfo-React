import React from 'react';
import Sidebar from "../components/QLHD/Sidebar";
import MainPanel from "../components/QLHD/MainPanel";
import '../assets/css/QLKH.css';

const QLHD = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default QLHD;
