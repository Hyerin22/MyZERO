import React, { useState } from "react";

import "../styles/MyBuy.scss";

// components
import DisplayPointTxt from "../components/DisplayPointTxt";
import TabGroup from "../components/TabGroup";
import Sidebar from "../components/Sidebar";

// pages
import Exchange from "./Exchange";
import MyBuyInfo from "./MyBuyInfo";
// import MyBuy from "./MyBuy";

export default function MyBuy() {
  // for the tab menu
  const tabTypes = ["Exchange", "MyBuy"];
  const [activeTab, setActiveTab] = useState(tabTypes[1]);

  const tabPages = {
    Exchange: Exchange,
    MyBuy: MyBuyInfo,
  };

  return (
    <div className="home-container">
      <Sidebar />
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
