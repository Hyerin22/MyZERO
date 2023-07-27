import React from "react";
import "../styles/components/Button.scss";

export default function Button(props) {
  const {
    title = "default",
    size = "23px",
    border,
    bgColor,
    color = "#1d1d1d",
  } = props;
  return (
    <div className="button-cont">
      <button
        style={{
          fontSize: size,
          border: border,
          background: bgColor,
          color: color,
        }}
      >
        {title}
      </button>
    </div>
  );
}
