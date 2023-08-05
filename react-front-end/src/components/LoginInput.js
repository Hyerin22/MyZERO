import React, { useState } from "react";

import { Link } from "react-router-dom";

// styles
import "../styles/components/LoginInput.scss";

// components
import Button from "./Button";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function LoginInput(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log("LoginInPut email, pws", email, ",", password )

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClickFunc( email, password );
  };

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
      <form className="inputs" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="PW"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="buttons">
        <Button
          title={props.bttnTxt}
          border="none"
          bgColor="#1d828e"
          radius="30px"
          color="white"
          margin="0 0 0 0"
          width="335px"
          onClick={props.onClickFunc}
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
