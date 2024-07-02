import React from 'react';
import Sidebar from "../components/QLBT/Sidebar";
import MainPanel from "../components/QLBT/MainPanel";
import '../assets/css/QLKH.css';

const QLBT = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default QLBT;
