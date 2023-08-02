import React from "react";

//styles
import "../styles/components/Sidebar.scss";

// components
import Nav from "../components/Nav";
import RatingProfile from "../components/RatingProfile";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

// images
import ratingSecond from "../img/rating-second.png";
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <RatingProfile ratingImage={ratingSecond} />
        <Profile symbol={vancSymbol} />
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
