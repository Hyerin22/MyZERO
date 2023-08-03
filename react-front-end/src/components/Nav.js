import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/components/Nav.scss";

export default function Nav() {
  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <div>
      <ul>
        <li className="nav-item">
          <NavLink
            to="/MyZERO"
            className={`nav-link ${
              currentPathname.includes("/MyZERO") ||
              currentPathname === "/Community" ||
              currentPathname === "/Setting"
                ? "active"
                : ""
            }`}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/HowTo">How to collect?</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Reward"
            className={`nav-link ${
              currentPathname.includes("/Store") ||
              currentPathname === "/Reward" ||
              currentPathname === "/MyBuy"
                ? "active"
                : ""
            }`}
          >
            Store
          </NavLink>
        </li>
        {/* just for now */}
        <li className="nav-item">
          <NavLink to="/blank">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}
