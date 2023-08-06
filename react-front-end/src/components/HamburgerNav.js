import React, { useState, useEffect } from "react";
import axios from "axios";
import { plantLevel, getCitySymbol, currentMonth } from '../provider/pointsUtils';
import { NavLink, useLocation } from "react-router-dom";

// styles
import "../styles/components/HamburgerNav.scss";

// images
import ratingSecond from "../img/level02.png";
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function HamburgerNav({
  isOpen,
  onClick,
  username = "User",
  cityImg = vancSymbol,
}) {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [state, setState] = useState({
    user: { id: 1 },
    this_month: {},
  });

  //get user info
  useEffect(() => {
    axios.get(`/api/users/${state.user.id}`)
      .then((res) => {
        setState(prev => ({
          ...prev,
          user: res.data
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);


  // get user's this month point
  useEffect(() => {
    axios
      .get(`/api/points/${state.user.id}/month?months=${currentMonth}`)
      .then((res) => {
        
        const userPoint = res.data;
        const this_month = userPoint.slice(-1)[0].month_points;

        setState((prev) => ({
          ...prev,
          this_month,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  return (
    <div className="hamNav-cont">
      <div className="ham-first">
        <div className="ham-infoIcon rating">
          <img src={plantLevel(state.this_month)} alt="rating" />
        </div>
        <div className="ham-infoIcon city">
          <img src={getCitySymbol(state.user.city_id)} alt="city" />
        </div>
      </div>
      <div className="ham-second">
        <p>Hi, {state.user.first_name}</p>
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
