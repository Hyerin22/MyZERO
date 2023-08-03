import React from "react";

// data
import { fakeProduct } from "../mockdata/fakeData";

// styles
import "../styles/Exchange.scss";

// components
import Product from "../components/Product";

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
