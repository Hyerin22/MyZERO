import React from "react";
import "../styles/components/Nav.scss";

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/How">How to collect?</NavLink>
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
