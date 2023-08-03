import React from "react";

import "../styles/Login.scss";

import LoginLeftSide from "../components/LoginLeftSide";
import LoginInput from "../components/LoginInput";

export default function Login() {
  return (
    <div className="login-cont">
      <LoginLeftSide />
      <div className="right-side">
        <LoginInput title="Login" />
      </div>
    </div>
  );
}
