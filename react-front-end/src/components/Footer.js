import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Footer.scss";
import logo from "../img/Logo.png";

export default function Footer() {
  return (
    <div className="footer-cont">
      <NavLink to="/" className="footer">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}
