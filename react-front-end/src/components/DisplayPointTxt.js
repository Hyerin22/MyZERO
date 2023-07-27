import React from "react";
import "../styles/components/DisplayPointTxt.scss";

export default function DisplayPointTxt(props) {
  const {
    text = "You have",
    point = "000",
    color = "#1d1d1d",
    size,
    pointSize,
    pointMargin,
  } = props;
  return (
    <div className="point-container">
      <p
        style={{
          fontSize: size,
        }}
      >
        {text}
      </p>
      <p
        style={{
          color: color,
          fontSize: pointSize,
          fontFamily: "DIN Alternate, sans-serif",
          margin: pointMargin,
        }}
      >
        {point}
      </p>
      <p
        style={{
          fontSize: size,
        }}
      >
        pt
      </p>
    </div>
  );
}
