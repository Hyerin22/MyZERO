import React from "react";

// styles
import "../styles/HomeMyZERO.scss";

// components
import Button from "../components/Button";
import DisplayPointTxt from "../components/DisplayPointTxt";

export default function HomeMyZERO() {
  return (
    <div className="myZero-cont">
      <div className="myZero-top">
        <Button
          title="Collect MyZero"
          color="#ffffff"
          border="none"
          bgColor="linear-gradient(180deg, #fddb70 0%, #fead5e 100%)"
          font="DIN Alternate, sans-serif"
          radius="18px"
        />
        <DisplayPointTxt
          text="This month you collected"
          point="00"
          size="24px"
          pointSize="64px"
          alignItems="center"
          pointMargin="0 20px"
        />
      </div>
      <div className="myZero-mid">
        <p className="heading">History</p>
        <div className="graph-cont">Graph here</div>
      </div>
    </div>
  );
}
