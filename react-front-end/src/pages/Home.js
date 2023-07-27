import React from "react";
// styles
import "../styles/Home.scss";

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
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-top">
          <RatingProfile ratingImage={ratingSecond} />
          <Profile symbol={vancouver} />
        </div>
        <div className="nav">
          <Nav />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}
