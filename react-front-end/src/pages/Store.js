import React, { useState } from "react";

// styles
// import "../styles/Home.scss"
import "../styles/Store.scss";

// components
import DisplayPointTxt from "../components/DisplayPointTxt";
import TabGroup from "../components/TabGroup";
import Sidebar from "../components/Sidebar";

export default function Store() {
  // for the tab menu
  const tabTypes = ["Exchange", "MyBuy"];
  const [activeTab, setActiveTab] = useState(tabTypes[0]);

  const tabPages = {
    Exchange: null,
    MyBuy: null,
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
