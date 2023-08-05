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

  // Get city info
  // Get city_user's info
  // Combine city_user data with cities data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityRes = await axios.get(`/api/cities`);
        const citiesData = cityRes.data;
    
        const cityUserRes = await axios.get(`/api/city-user`);
        const cityUserdata = cityUserRes.data;
  
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
