import React from "react";
import { getCitySymbol } from '../hooks/pointsUtils';

import "../styles/components/Profile.scss";

export default function Profile(props) {
//   {
//   username = "user",
//   location = "default-location",
//   symbol,
// }
const cityNames = {
  1: 'Vancouver',
  2: 'Burnaby',
  3: "North Vancouver",
  4: "Coquitlam",
  5: "Richmond",
  6: "Langley"
};


  return (
    <div className="profile-cont">
      <p>Hi, {props.user.first_name}</p>
      <div className="locations">
        <p>{cityNames[props.user.city_id]}</p>
        <div className="circle-cont">
          <img src={getCitySymbol(props.user.city_id)} alt="symbol" />
        </div>
      </div>
    </div>
  );
}
