import React from "react";

// styles
import "../styles/Home.scss";

// components
import Nav from "../components/Nav";
import RatingProfile from "../components/RatingProfile";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DisplayPointTxt from "../components/DisplayPointTxt";
import TabGroup from "../components/TabGroup";

// pages
import HomeMyZERO from "./HomeMyZERO";
import Community from "./Community";

// images
import ratingSecond from "../img/rating-second.png";
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function Home() {
  // for the tab menu
  const tabTypes = ["MyZERO", "Community", "Setting"];

  const tabPages = {
    MyZERO: HomeMyZERO,
    Community: Community,
    Setting: null,
  };

  return (
    <div className="home-container">
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
      <div className="home-main">
        <div className="home-top">
          <DisplayPointTxt
            size="26px"
            point="1,403"
            color="#1d828e"
            pointSize="76px"
            pointMargin="0px 7px"
          />
        </div>
        <div className="home-content">
          <div className="tabs-container">
            <TabGroup types={tabTypes} tabPages={tabPages} marginL="10px" />
          </div>
        </div>
      </div>
    </div>
  );
}
