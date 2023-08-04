import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// styles
import "../styles/components/HamburgerNav.scss";

// images
import ratingSecond from "../img/rating-second.png";
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function HamburgerNav({
  isOpen,
  onClick,
  username = "User",
  ratingImg = ratingSecond,
  cityImg = vancSymbol,
}) {
  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <div className="hamNav-cont">
      <div className="ham-first">
        <div className="ham-infoIcon rating">
          <img src={ratingImg} alt="rating" />
        </div>
        <div className="ham-infoIcon city">
          <img src={cityImg} alt="city" />
        </div>
      </div>
      <div className="ham-second">
        <p>Hi, {username}</p>
        <button className="hamNav" onClick={onClick}>
          <div className={isOpen ? "line1After" : "line1"}></div>
          <div className={isOpen ? "line2After" : "line2"}></div>
          <div className={isOpen ? "line3After" : "line3"}></div>
        </button>
      </div>

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
