import React, { useState, useEffect } from "react";
import axios from 'axios';

import "../styles/components/MyBuyInfo.scss";

import Product from "./Product";

export default function MyBuyInfo() {
  const purchaseHistory = JSON.parse(localStorage.getItem("purchased"));

  const [state, setState] = useState({
    id: 1,
    usage: [],
  });

  // Get one user's usage
  useEffect(() => {
    axios.get(`/api/usage/${state.id}`)
      .then((res) => {

        const combinedData = res.data.earnedData.concat(res.data.spendData);
        console.log("combinedData", combinedData);

        let remaining_point = 0;
        const updatedUsage = combinedData.map((item) => {
        console.log("remaining_point", remaining_point, "index");
          if (item.spend_point) {
            remaining_point -= item.spend_point;
          }
        
          if (item.earned_point) {
            remaining_point += item.earned_point;
          }
        
          return { ...item, remaining_point };
        });

        console.log("updatedUsage", updatedUsage);

        updatedUsage.sort((a, b) => b.id - a.id);

        // date formatting: leave only YYYY-MM-DD
        const formattedData = updatedUsage.map((item) => ({
          ...item,
          date: item.date.substring(0, 10),
        }));

        setState(prev => ({
          ...prev,
          usage: formattedData
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);



  return (
    <div className="MyBuyInfo-cont">
      {/* history */}
      <div className="MBInfo-tab-container">
        <div className="MBInfo-tab">History</div>
      </div>
      <div className="MBInfo-content-box">
        <div className="MBInfo-history">
          <p>Date</p>
          <p>Store</p>
          <p>Point Use</p>
          <p>Total Point</p>
        </div>
        {state.usage &&
          state.usage.length > 0 &&
          state.usage.map((history) => (

            <div className="MBInfo-history" key={history.id}>
              <p>{history.date}</p>
              <p>{history.product_store}</p>
              {history.spend_point && <p>-{history.spend_point} pt</p>}
              {history.earned_point && <p>{history.earned_point} pt</p>}
              <p>{history.remaining_point} pt</p>
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

