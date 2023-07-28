import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Nav.scss";

export default function Nav() {
  return (
    <div>
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/HowTo">How to collect?</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Store">Store</NavLink>
        </li>
        {/* just for now */}
        <li className="nav-item">
          <NavLink to="/blank">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}
