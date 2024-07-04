<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import QLKH from "./pages/QLKH";
import QLSP from "./pages/QLSP";
import QLBH from "./pages/QLBH";
import QLHD from "./pages/QLHD";
import QLBT from "./pages/QLBT";
import Login from "./components/AuthForm/dangnhap";
import Register from "./components/AuthForm/dangky";
import MainHeader from "./components/QLBH/MainHeader";
import { useEffect, useState } from "react";
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QLKH from './pages/QLKH';
import QLSP from './pages/QLSP';
import QLBH from './pages/QLBH';
import QLHD from './pages/QLHD';
import QLBT from './pages/QLBT';
import Login from './components/AuthForm/dangnhap';
import Register from './components/AuthForm/dangky';

>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
import "./App.css";

function App() {
  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("isLogin"));
    setLogin(items);
    console.log(isLogin);
  }, []);

  return (
    <BrowserRouter>
      {isLogin === true && <MainHeader></MainHeader>}
      <Routes>
<<<<<<< HEAD
        <Route path="/qlsp" element={isLogin ? <QLSP /> : <Navigate to="/login" />} />
        <Route path="/qlkh" element={isLogin ? <QLKH /> : <Navigate to="/login" />} />
        <Route path="/qlbh" element={isLogin ? <QLBH /> : <Navigate to="/login" />} />
        <Route path="/qlbt" element={isLogin ? <QLBT /> : <Navigate to="/login" />} />
        <Route path="/qlhd" element={isLogin ? <QLHD /> : <Navigate to="/login" />} />
=======
        <Route path="/qlkh" element={<QLKH />} />
        <Route path="/qlsp" element={<QLSP />} />
        <Route path="/qlbh" element={<QLBH />} />
        <Route path="/qlhd" element={<QLHD />} />
        <Route path="/qlbt" element={<QLBT />} />
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
