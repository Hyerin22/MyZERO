import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// styles
import "../styles/CityInfo.scss";

// components
import DisplayPointTxt from "../components/DisplayPointTxt";

export default function CityInfo() {
  const [city, setCity] = useState(null);

  const { id } = useParams();
  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );
    const jsonData = await response.json();
    // setData(jsonData);
    if (jsonData.length > 0) {
      setCity(jsonData[0]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cityinfo-cont">
      {city && (
        <div className="city-top" key={city.id}>
          <p>{city.address.city}</p>
          <div className="city-info">
            <DisplayPointTxt
              text=""
              size="26px"
              point="453"
              color="#1d828e"
              pointSize="76px"
              pointMargin="0px 7px"
            />
          </div>
        </div>
      )}
    </div>
  );
}
