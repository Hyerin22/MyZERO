import React, { useEffect, useState } from "react";

// styles
import "../styles/Community.scss";

// components
import City from "../components/City";

// imgs
import vancouver from "../img/vancouver.jpeg";

export default function Community() {
  // for data
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="community-cont">
      {data.length > 0 &&
        data.map((city) => (
          <City
            key={city.id}
            cityName={city.address.city}
            cityImg={vancouver}
            joinedPeople="00"
          />
        ))}
      {/* {data.map((city) => ( */}
      {/* <City cityName="Vancouver" cityImg={vancouver} joinedPeople="00" />
          <City
            cityName="North Vancouver"
            cityImg={vancouver}
            joinedPeople="00"
          /> */}
      {/* <City cityName="Burnaby" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Langley" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Richmond" cityImg={vancouver} joinedPeople="00" />
      <City cityName="Coquitlam" cityImg={vancouver} joinedPeople="00" /> */}
      {/* ))} */}
    </div>
  );
}
