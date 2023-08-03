import React from "react";

// styles
import "../styles/Login.scss";

// components
import LoginLeftSide from "../components/LoginLeftSide";
import LoginInput from "../components/LoginInput";

export default function Signup() {
  return (
    <div className="login-cont">
      <LoginLeftSide />
      <div className="right-side">
        <LoginInput
          title="Sign up"
          signupDisplay="none"
          bttnTxt="Start MyZERO!"
          // backend: click -> save the user info and route to MyZERO
          // onClickFunc=""
        />
      </div>
    </div>
  );
}
