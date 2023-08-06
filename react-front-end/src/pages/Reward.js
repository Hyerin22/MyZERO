import React, { useState, useEffect } from "react";
import axios from 'axios';

// data
import { fakeProduct } from "../mockdata/fakeData";

// styles
import "../styles/Reward.scss";

// components
import Product from "../components/Product";

export default function Reward() {

  const [state, setState] = useState({
    id: 1,
    products:[],
  });

  // Get product info
  useEffect(() => {
    axios.get(`/api/products`)
      .then((res) => {

        res.data.sort((a, b) => b.id - a.id);

        setState(prev => ({
          ...prev,
          products: res.data
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);

  return (
    <div className="reward-cont">
      {state.products.length > 0 &&
        state.products.map((prod) => (
          <Product
            key={prod.id}
            id={prod.id}
            productName={prod.name}
            prodImg={prod.photo}
            brandName={prod.store}
            prodPoint={prod.point}
          />
        ))}
    </div>
  );
}
