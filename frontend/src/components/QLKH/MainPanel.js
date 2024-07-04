
import React from "react";
import MainHeader from "../../components/QLKH/MainHeader";
import Container from "../../components/QLKH/Container";
import "../../assets/css/MainPanel.css";
import { useState , useEffect} from "react";

const MainPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("isLogin"));
    setLogin(items);
    console.log(isLogin);
  }, []);

  const logOut = () => {
    localStorage.removeItem("isLogin");
    window.location.href = "/login";
  };

  return (
    <div className="mainPanel">

      {/* <MainHeader /> */}
      {isLogin === true &&  <MainHeader onSearch={handleSearch} />}
      {/* Thêm MainHeader và truyền handleSearch */}
      <Container searchTerm={searchTerm} /> {/* Truyền searchTerm xuống Container */}
      <div className="footer"></div>
    </div>
  );
};

export default MainPanel;
