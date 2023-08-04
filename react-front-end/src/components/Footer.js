import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Footer.scss";
import logo from "../img/Logo.png";

export default function Footer({ to = "/MyZERO" }) {
  return (
    <div className="footer-cont">
      <NavLink to={to} className="footer">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}
