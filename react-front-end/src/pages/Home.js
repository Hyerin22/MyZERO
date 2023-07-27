import React from "react";

// components
import Nav from "../components/Nav";
import RatingProfile from "../components/RatingProfile";
import Profile from "../components/Profile";

// images
import ratingSecond from "../img/rating-second.png";
import vancouver from "../img/vancouver-symbol.jpeg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <RatingProfile ratingImage={ratingSecond} />
      <Profile symbol={vancouver} />
      <Nav />
      <Footer />
    </div>
  );
}
