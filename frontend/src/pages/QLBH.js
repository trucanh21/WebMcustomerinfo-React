import React from 'react';
import Sidebar from "../components/QLBH/Sidebar";
import MainPanel from "../components/QLBH/MainPanel";
import '../assets/css/QLKH.css';

const QLBH = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default QLBH;
