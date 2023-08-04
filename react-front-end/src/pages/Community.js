import React, { useState, useEffect } from "react";
import axios from 'axios';

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
import HomeMyZERO from "./HomeMyZERO";
import CommTabCities from "../components/CommTabCities";
import SettingTab from "../components/SettingTab";

export default function Community() {
  // for the tab menu
  const tabTypes = ["MyZERO", "Community", "Setting"];
  const [activeTab, setActiveTab] = useState(tabTypes[1]);

 
  const tabPages = {
    MyZERO: HomeMyZERO,
    Community: CommTabCities,
    Setting: SettingTab,
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Sidebar />
      {/* Right side main content */}
      <div className="home-main">
        <div className="home-top">
          <DisplayPointTxt
            size="26px"
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
