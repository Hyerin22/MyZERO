import React from "react";
import { Link } from "react-router-dom";

// styles
import "../styles/components/LoginInput.scss";

// components
import Button from "./Button";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function LoginInput({
  title,
  signupDisplay,
  bttnTxt = "Login",
  backBttnDisplay,
  onClickFunc,
}) {
  return (
    <div className="loginInput-cont">
      <div className="input-top">
        <Link
          to="/"
          style={{
            display: backBttnDisplay,
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="3x" color="#1d828e" />
        </Link>
        <p>{title}</p>
      </div>
      <div className="inputs">
        <input type="Email" placeholder="Email" />
        <input type="password" placeholder="PW" />
      </div>
      <div className="buttons">
        <Button
          title={bttnTxt}
          border="none"
          bgColor="#1d828e"
          radius="30px"
          color="white"
          margin="0 0 0 0"
          width="335px"
          onClick={onClickFunc}
        />

        <div
          className="forSignup"
          style={{
            display: signupDisplay,
          }}
        >
          <p>Want to join MyZERO?</p>
          <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
