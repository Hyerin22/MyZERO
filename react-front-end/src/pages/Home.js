import React, { useState } from "react";

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
import Sidebar from "../components/Sidebar";
import CommTabCities from "../components/CommTabCities";
import HomeMyZERO from "./HomeMyZERO";
import SettingTab from "../components/SettingTab";

// images
// import ratingSecond from "../img/rating-second.png";
// import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function Home() {
  // for the tab menu
  const tabTypes = ["MyZERO", "Community", "Setting"];
  const [activeTab, setActiveTab] = useState(tabTypes[0]);

  const tabPages = {
    MyZERO: HomeMyZERO,
    Community: CommTabCities,
    Setting: SettingTab,
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Sidebar />
      {/* <div className="sidebar">
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
      </div> */}
      {/* Right side main content */}
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
            <TabGroup
              types={tabTypes}
              tabPages={tabPages}
              marginL="10px"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
