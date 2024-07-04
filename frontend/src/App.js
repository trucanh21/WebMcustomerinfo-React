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
        <Route path="/qlsp" element={isLogin ? <QLSP /> : <Navigate to="/login" />} />
        <Route path="/qlkh" element={isLogin ? <QLKH /> : <Navigate to="/login" />} />
        <Route path="/qlbh" element={isLogin ? <QLBH /> : <Navigate to="/login" />} />
        <Route path="/qlbt" element={isLogin ? <QLBT /> : <Navigate to="/login" />} />
        <Route path="/qlhd" element={isLogin ? <QLHD /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
