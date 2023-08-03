import React from "react";

import "../styles/components/LoginInput.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function LoginInput({ title }) {
  return (
    <div className="loginInput-cont">
      <p>{title}</p>
      <div className="inputs">
        <input type="Email" placeholder="Email" />
        <input type="password" placeholder="PW" />
      </div>
      <div className="buttons">
        <Button
          title="Login"
          border="none"
          bgColor="#1d828e"
          radius="30px"
          color="white"
          margin="0 0 10px 0"
          width="335px"
        />

        <div className="forSignup">
          <p>Want to join MyZERO?</p>
          {/* <div /> */}
          <Link to="/Signup">Sign up</Link>
        </div>
        {/* <Button
          title="Sign Up"
          color="#1d828e"
          border="3px solid #1d828e"
          bgColor="white"
          radius="30px"
          width="335px"
        /> */}
      </div>
    </div>
  );
}
