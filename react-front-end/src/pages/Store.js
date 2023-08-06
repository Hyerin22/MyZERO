import React, { useState } from "react";

// styles
import "../styles/Home.scss";

// components
import DisplayPointTxt from "../components/DisplayPointTxt";
import TabGroup from "../components/TabGroup";
import Sidebar from "../components/Sidebar";
import Reward from "./Reward";
import MyBuyInfo from "../components/MyBuyInfo";
import HamburgerNav from "../components/HamburgerNav";

export default function Store() {
  // for the tab menu
  const tabTypes = ["Redeem", "MyBuy"];
  const [activeTab, setActiveTab] = useState(tabTypes[0]);

  const tabPages = {
    Redeem: Reward,
    MyBuy: MyBuyInfo,
  };

  // for Hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-container">
      <Sidebar />
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
