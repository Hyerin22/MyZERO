import React from "react";

// components
import Nav from "../components/Nav";
import RatingProfile from "../components/RatingProfile";
import Profile from "../components/Profile";

// images
import ratingSecond from "../img/rating-second.png";
import vancouver from "../img/vancouver-symbol.jpeg";

export default function Home() {
  return (
    <div>
      <RatingProfile ratingImage={ratingSecond} />
      <Profile symbol={vancouver} />
      <Nav />
    </div>
  );
}
