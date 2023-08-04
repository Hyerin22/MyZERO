import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/components/HamburgerNav.scss";

export default function HamburgerNav({ isOpen, onClick }) {
  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <div className="hamNav-cont">
      <button className="hamNav" onClick={onClick}>
        <div className={isOpen ? "line1After" : "line1"}></div>
        <div className={isOpen ? "line2After" : "line2"}></div>
        <div className={isOpen ? "line3After" : "line3"}></div>
      </button>

      {isOpen && (
        <div className="link-cont">
          <div className="links">
            <NavLink
              to="/MyZERO"
              className={`hamNav-link ${
                currentPathname.includes("/MyZERO") ||
                currentPathname === "/Community" ||
                currentPathname === "/Setting"
                  ? "ham-active"
                  : ""
              }`}
            >
              Home
            </NavLink>
            <NavLink to="/HowTo">How to collect?</NavLink>
            <NavLink
              to="/Reward"
              className={`hamNav-link ${
                currentPathname.includes("/Store") ||
                currentPathname === "/Reward" ||
                currentPathname === "/MyBuy"
                  ? "ham-active"
                  : ""
              }`}
            >
              Store
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
