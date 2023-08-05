import React, { useState, useEffect } from "react";
import axios from "axios";
import { plantLevel, currentMonth } from '../hooks/pointsUtils'

// styles
import "../styles/components/CityDetailLayout.scss";

// components
import Nav from "./Nav";
import RatingProfile from "./RatingProfile";
import Profile from "./Profile";
import Footer from "./Footer";
import Button from "./Button";
import DisplayPointTxt from "./DisplayPointTxt";
import TabGroup from "./TabGroup";
import CityInfo from "./CityInfo";
import HomeMyZERO from "../pages/HomeMyZERO";
import Setting from "../pages/Setting";
import Sidebar from "./Sidebar";
import HamburgerNav from "./HamburgerNav";

// images
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function CityDetailLayout() {

  const [state, setState] = useState({
    cities: [],
    user: {id:1},
    this_month:{},
  });
  
  // for the tab menu
  const tabTypes = ["MyZERO", "Community", "Setting"];
  const [activeTab, setActiveTab] = useState(tabTypes[1]);

  const tabPages = {
    MyZERO: HomeMyZERO,
    Community: CityInfo,
    Setting: Setting,
  };
  

  // get user's this month point
  useEffect(() => {
    axios
      .get(`/api/points/${state.user.id}/month?months=${currentMonth}`)
      .then((res) => {
        
        const this_month = res.data[3].month_points;

        setState((prev) => ({
          ...prev,
          this_month,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  // for Hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Sidebar />
      {/* Right side main content */}
      <HamburgerNav isOpen={isOpen} onClick={toggleMenu} />
      <div className="home-main">
        <div className="home-top">
          <DisplayPointTxt
            size="26px"
            color="#1d828e"
            pointSize="76px"
            pointMargin="0px 7px"
          />
        </div>
        <div className="city-content">
          <div className="city-tabs-container">
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
