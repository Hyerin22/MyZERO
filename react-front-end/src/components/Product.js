import React from "react";

// styles
import "../styles/components/Products.scss";

import Button from "./Button";

import Sample from "../img/rating-second.png";

export default function Product({
  prodImg,
  brandName = "Walmart",
  prodPoint = "000",
}) {
  return (
    <div className="prod-container">
      <div className="prod-box">
        <div className="prod-img">
          <img src={Sample} alt="product" />
        </div>
        <div className="prod-brand">
          <p>{brandName}</p>
        </div>
        <div className="prod-point">
          <p>{prodPoint}pt</p>
        </div>
      </div>
      <div className="prod-bttn">
        <Button
          title="Buy"
          width="190px"
          height="45px"
          border="3px solid #1d828e"
          bgColor="white"
          radius="20px"
          color="#1d828e"
        />
      </div>
    </div>
  );
}
