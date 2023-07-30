import React from "react";

// styles
import "../styles/Community.scss";

// components
import City from "../components/City";

// imgs
import vancouver from "../img/vancouver.jpeg";

export default function Community() {
  return (
    <div className="community-cont">
      <City cityName="Vancouver" cityImg={vancouver} joinedPeople="00" />
      <City cityName="North Vancouver" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Burnaby" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Langley" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Richmond" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Coquitlam" cityImg={vancouver} joinedPeople="00" />
    </div>
  );
}
