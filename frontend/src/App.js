import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QLKH from './pages/QLKH';
import QLSP from './pages/QLSP';
import QLBH from './pages/QLBH';
import QLHD from './pages/QLHD';
import QLBT from './pages/QLBT';
import Login from './components/AuthForm/dangnhap';
import Register from './components/AuthForm/dangky';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/qlkh" element={<QLKH />} />
        <Route path="/qlsp" element={<QLSP />} />
        <Route path="/qlbh" element={<QLBH />} />
        <Route path="/qlhd" element={<QLHD />} />
        <Route path="/qlbt" element={<QLBT />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
