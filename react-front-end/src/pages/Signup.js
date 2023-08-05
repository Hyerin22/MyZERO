import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import "../styles/Login.scss";

// components
import LoginLeftSide from "../components/LoginLeftSide";
import LoginInput from "../components/LoginInput";

export default function Signup() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/MyZERO");
  };
  return (
    <div className="login-cont">
      <LoginLeftSide />
      <div className="right-side">
        <LoginInput
          title="Sign up"
          bttnTitle="Start MyZERO!"
          signupDisplay="none"
          onclick={goToHome}
        />
      </div>
    </div>
  );
}
