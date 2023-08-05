import React, { useEffect, useState } from "react";
import axios from 'axios';

// styles
import "../styles/components/CommTabCities.scss";

// components
import City from "./City";

export default function CommTabCities() {
  const [state, setState] = useState({
    cities: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get city info
        const cityRes = await axios.get(`/api/cities`);
        const citiesData = cityRes.data;
    
        // Get city_user's info
        const cityUserRes = await axios.get(`/api/city-user`);
        const cityUserdata = cityUserRes.data;
  
        // Combine city_user data with cities data
        const updatedCities = citiesData.map(city => ({
          ...city,
          city_user: cityUserdata.find(user => user.city_id === city.id),
        }));
  
        setState(prev => ({
          ...prev,
          cities: updatedCities,
        }));
  
      } catch (error) {
        console.error("connect error:", error.message);
      }
    };
  
    fetchData();
  }, []);
  
  console.log("씨티 피플", state);

  return (
    <div className="community-cont">
      {state.cities.length > 0 &&
        state.cities.map((city) => (
          <City
            key={city.id}
            id={city.id}
            cityName={city.name}
            cityImg={city.photo}
            joinedPeople={city.city_user?.user_count}
          />
        ))}
    </div>
  );
}
