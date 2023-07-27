import React from "react";
import RatingProfile from "../components/RatingProfile";

import ratingSecond from "../img/rating-second.png";

export default function Home() {
  return (
    <div>
      <RatingProfile ratingImage={ratingSecond} />
    </div>
  );
}
