import React from "react";

// data
import { fakeHistory } from "../mockdata/fakeData";

import "../styles/MyBuyInfo.scss";

import Product from "../components/Product";

export default function MyBuyInfo() {
  const purchaseHistory = JSON.parse(localStorage.getItem("purchased"));

  return (
    <div className="MyBuyInfo-cont">
      {/* history */}
      <div className="MBInfo-tab-container">
        <div className="MBInfo-tab">History</div>
      </div>
      <div className="MBInfo-content-box">
        {fakeHistory &&
          fakeHistory.length > 0 &&
          fakeHistory.map((history) => (
            <div className="MBInfo-history" key={history.id}>
              <p>{history.date}</p>
              <p>{history.brandName}</p>
              <p>{history.deductedPoints} pt</p>
              <p>{history.remainingPoints} pt</p>
            </div>
          ))}
      </div>

      {/* Product that I bought */}
      <div className="MBInfo-products">
        {purchaseHistory && purchaseHistory.length > 0 ? (
          purchaseHistory.map((purchase, index) => (
            <Product
              key={index}
              productName={purchase.productName}
              prodImg={purchase.prodImg}
              brandName={purchase.brandName}
              prodPoint={purchase.prodPoint}
              bttnDisplay="none"
              boxWidth="154px"
              divWidth="154px"
              divPadding="0"
              nameSize="14px"
              fontSize="20px"
              imgBoxHeight="130px"
            />
          ))
        ) : (
          <p>No purchase yet</p>
        )}
      </div>
    </div>
  );
}
