import React from "react";
import "../styles/components/RatingProfile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function RatingProfile({ ratingImage }) {
  return (
    <div className="rating-cont">
      <FontAwesomeIcon icon={faInfoCircle} size="lg" />
      <span>
        Rating depends on your accumulated points!: <br></br> 🪹 → 🌱 → 🌿 → 🪴 →
        🌳<br></br> You can get more info on the How to collect page!
      </span>
      <img src={ratingImage} alt="second-rating" />
    </div>
  );
}
