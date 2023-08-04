import React, { useEffect, useState } from "react";
import axios from 'axios';

// styles
import "../styles/components/CommTabCities.scss";

// components
import City from "./City";

// imgs
import vancouver from "../img/vancouver.jpeg";

export default function CommTabCities() {
  const [state, setState] = useState({
    data:{},
    cities: {},
    numberOfUser: 0
  });

  // Counting city's users
  useEffect(() => {
    //get city info
    axios.get(`/api/cities`)
      .then((res) => {
        setState(prev => ({
          ...prev,
          cities: res.data
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });

      // get city_user's info
      axios.get(`/api/city-user`)
      .then((res) => {
        // Combine city_user data with cities data
        const updatedCities = state.cities.map(city => ({
          ...city,
          city_user: res.data.find(user => user.city_id === city.id),
        }));
        console.log("updatedCities", updatedCities);
  
        // Update state with the combined data
        setState(prev => ({
          ...prev,
          cities: updatedCities,
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);

  return (
    <div className="community-cont">
      {state.cities.length > 0 &&
        state.cities.map((city) => (
          <City
            key={city.id}
            id={city.id}
            cityName={city.name}
            cityImg={city.photo}
            joinedPeople="00"
          />
        ))}
    </div>
  );
}
