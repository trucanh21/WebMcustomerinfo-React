import QLKH from "./pages/QLKH";
import LoginForm from "./components/AuthForm/dangnhap";
import "./App.css";
import RegistrationForm from "./components/AuthForm/dangky";

function App() {
  return (
    <div className="test">
      {/* <QLKH/> */}
      {/* <RegistrationForm/> */}
      <LoginForm/>
    </div>
  );
}

export default App;
