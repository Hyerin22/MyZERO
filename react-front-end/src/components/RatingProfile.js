import React from "react";

// styles
import "../styles/components/RatingProfile.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function RatingProfile({
  ratingImage,
  margin = "70px 35px 25px 0",
}) {
  return (
    <div
      className="rating-cont"
      style={{
        margin: margin,
      }}
    >
      <FontAwesomeIcon icon={faInfoCircle} size="lg" />
      <span>
        Rating on your THIS MONTH accumulated points!: <br></br> 🪹 → 🌱 → 🌿 →
        🪴 → 🌳<br></br> You can get more info on the How to collect page!
      </span>
      <img src={ratingImage} alt="second-rating" />
    </div>
  );
}
