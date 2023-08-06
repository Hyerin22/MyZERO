import React from "react";

import "../styles/components/LoginLeftSide.scss";

import Footer from "./Footer";

export default function LoginLeftSide() {
  return (
    <div className="left-side">
      <div className="left-top">
        <Footer to="/" />
        <p className="welcome">
          Welcome to <span>MyZERO</span>!
        </p>
        <p className="desc">
          the eco-conscious app that rewards you for making sustainable choices
        </p>
      </div>

      <div className="left-mid">
        <p>
          By using your own tumbler and bowl,
          <br /> you help reduce waste
          <br /> and protect the environment.
        </p>
        <p>
          Join our thriving eco-warrior community today
          <br /> and let's make a positive impact together!
        </p>
      </div>
    </div>
  );
}
