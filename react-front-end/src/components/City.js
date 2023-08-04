import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/City.scss";

export default function City({
  cityName,
  joinedPeople,
  cityImg,
  id,
}) {
  return (
    <Link to={`/city/${id}`}>
      <div className="city-container">
        <p className="city">{cityName}</p>
        <p className="people-num">{joinedPeople} number</p>
        <div className="opacity-box"></div>
        <img src={`http://localhost:8080/city/${cityImg}`} alt="city" />
      </div>
    </Link>
  );
}