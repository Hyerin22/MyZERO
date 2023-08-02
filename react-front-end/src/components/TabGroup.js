import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// styles
import "../styles/components/TabGroup.scss";

export default function TabGroup({
  types,
  tabPages,
  size = "16px",
  marginL,
  activeTab,
  setActiveTab,
  padding = "14px 30px",
  boxPadding = "65px 70px",
  boxWidth = "1059px",
  boxHeight = "720px",
  boxBgColor = "white",
  tabMarginR = "40px",
}) {
  // const [active, setActive] = useState(types[0]);

  const renderTabContent = () => {
    // current active tab
    const ReturnPage = tabPages[activeTab];
    if (ReturnPage) {
      return <ReturnPage />;
    }
    return null;
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        className="tab-container"
        style={{
          marginRight: tabMarginR,
        }}
      >
        {types.map((type) => (
          <div
            key={type}
            style={{
              fontSize: size,
              marginLeft: marginL,
              padding: padding,
            }}
            className={`tab ${activeTab === type ? "active" : ""}`}
            onClick={() => {
              setActiveTab(type);
              navigate(`/${type}`);
            }}
          >
            {type}
          </div>
        ))}
      </div>
      <div
        style={{
          width: boxWidth,
          padding: boxPadding,
          height: boxHeight,
          backgroundColor: boxBgColor,
        }}
        className="content-box"
      >
        {renderTabContent()}
      </div>
    </>
  );
}
