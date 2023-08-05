import React from "react";
import "../styles/components/Profile.scss";

export default function Profile(props
//   {
//   username = "user",
//   location = "default-location",
//   symbol,
// }
) {
  return (
    <div className="profile-cont">
      {/* <p>Hi, {props.user.first_name}</p> */}
      <div className="locations">
        {/* <p>{props.user.city_id}</p> */}
        <div className="circle-cont">
          {/* <img src={props.symbol} alt="symbol" /> */}
        </div>
      </div>
    </div>
  );
}
