import React from "react";
import "../styles/components/Profile.scss";

export default function Profile({
  username = "user",
  location = "default-location",
  symbol,
}) {
  return (
    <div className="profile-cont">
      <p>Hi, {username}</p>
      <div className="locations">
        <p>{location}</p>
        <div className="circle-cont">
          <img src={symbol} alt="symbol" />
        </div>
      </div>
    </div>
  );
}
