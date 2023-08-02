// for backend
// Buy button

import React from "react";

// data
import fakeProduct from "../mockdata/fakeProduct";

// styles
import "../styles/Exchange.scss";

// components
import Product from "../components/Product";

import Sample from "../img/rating-second.png";

export default function Exchange() {
  return (
    <div className="exchange-cont">
      {fakeProduct.length > 0 &&
        fakeProduct.map((prod) => (
          <Product
            key={prod.id}
            productName={prod.productName}
            prodImg={prod.image}
            brandName={prod.brandName}
            prodPoint={prod.points}
          />
        ))}
    </div>
  );
}
