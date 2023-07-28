import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Tab.scss";

export default function Tab(props) {
  const {
    tabText = "MyZERO",
    width = "140px",
    height = "34px",
    routeTo = "/",
    size = "18px",
  } = props;
  return (
    <li className="tab-container">
      <Link
        style={{
          width: width,
          height: height,
          fontSize: size,
        }}
        to={routeTo}
      >
        {tabText}
      </Link>
    </li>
  );
}
