import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// styles
import "../styles/components/LoginInput.scss";

// components
import Button from "./Button";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function LoginInput(props) {
  return (
    <div className="loginInput-cont">
      <div className="input-top">
        <Link
          to="/"
          style={{
            display: props.backBttnDisplay,
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="3x" color="#1d828e" />
        </Link>
        <p>{props.title}</p>
      </div>
      <form className="inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="PW" />
      </form>
      <div className="buttons">
        <Button
          title={props.bttnTitle}
          border="none"
          bgColor="#1d828e"
          radius="30px"
          color="white"
          margin="0 0 0 0"
          width="335px"
          onclick={props.onclick}
        />

        <div
          className="forSignup"
          style={{
            display: props.signupDisplay,
          }}
        >
          <p>Want to join MyZERO?</p>
          <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
