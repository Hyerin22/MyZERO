import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../styles/components/DisplayPointTxt.scss";

export default function DisplayPointTxt(props) {

  const [state, setState] = useState({
    id: 1,
    total_point: 0
  });
  // When user login get the total point
  useEffect(() => {
    axios.get(`/api/usage/${state.id}/total-point`)
      .then((res) => {
        const tp = res.data.total_point;
        setState(prev => ({ ...prev, total_point:tp }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);

  const {
    text = "You have",
    point = state.total_point,
    color = "#1d1d1d",
    size,
    pointSize,
    pointMargin,
    alignItems = "baseline",
  } = props;
  return (
    <div
      style={{
        alignItems: alignItems,
      }}
      className="point-container"
    >
      <p
        className="firstText"
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
        className="pointTxt"
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
