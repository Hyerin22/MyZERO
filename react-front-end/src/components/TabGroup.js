import React, { useState } from "react";

// styles
import "../styles/components/TabGroup.scss";

export default function TabGroup({ types, tabPages, size = "16px", marginL }) {
  const [active, setActive] = useState(types[0]);

  const renderTabContent = () => {
    // current active tab
    const ReturnPage = tabPages[active];
    if (ReturnPage) {
      return <ReturnPage />;
    }
    return null;
  };

  return (
    <>
      <div className="tab-container">
        {types.map((type) => (
          <button
            key={type}
            style={{
              fontSize: size,
              marginLeft: marginL,
            }}
            className={`tab ${active === type ? "active" : ""}`}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="content-box">{renderTabContent()}</div>
    </>
  );
}
