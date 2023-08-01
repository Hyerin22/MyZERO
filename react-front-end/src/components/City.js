import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/City.scss";

export default function City({
  cityName = "Vancouver",
  joinedPeople = "0",
  cityImg,
  id,
}) {
  return (
    <Link to={`/city/${cityName}`}>
      <div className="city-container">
        <p className="city">{cityName}</p>
        <p className="people-num">{joinedPeople} number</p>
        <div className="opacity-box"></div>
        <img src={cityImg} alt="city" />
      </div>
    </Link>
  );
}
