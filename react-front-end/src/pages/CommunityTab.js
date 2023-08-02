import React, { useEffect, useState } from "react";

// styles
import "../styles/CommunityTab.scss";

// components
import City from "../components/City";

// imgs
import vancouver from "../img/vancouver.jpeg";

export default function CommunityTab() {
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
            id={city.id}
            cityName={city.address.city}
            cityImg={vancouver}
            joinedPeople="00"
          />
        ))}
    </div>
  );
}
