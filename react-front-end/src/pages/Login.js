import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import "../styles/Login.scss";

// components
import LoginLeftSide from "../components/LoginLeftSide";
import LoginInput from "../components/LoginInput";

export default function Login() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/MyZERO");
  };

  return (
    <div className="login-cont">
      <LoginLeftSide />
      <div className="right-side">
        <LoginInput
          title="Login"
          backBttnDisplay="none"
          bttnTitle="Login"
          onclick={goToHome}
        />
      </div>
    </div>
  );
}
