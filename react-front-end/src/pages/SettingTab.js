// for backend
// save button
// import the user's data -> when they click setting, their info should be displayed

import React, { useState } from "react";

// styles
import "../styles/SettingTab.scss";

// components
import RatingProfile from "../components/RatingProfile";
import Button from "../components/Button";

// images
import ratingSecond from "../img/rating-second.png";

// fake data
const cityNames = [
  "Burnaby",
  "Coquitlam",
  "Langley",
  "North Vancouver",
  "Richmond",
  "Vancouver",
];

const fakeUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "fakepassword123",
  location: "Burnaby",
};

export default function SettingTab() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="setting-cont">
      <RatingProfile ratingImage={ratingSecond} margin="0 0 30px 0" />
      <div className="input name">
        <label>Name</label>
        <br />
        <input type="text" value={fakeUser.name} />
        {/* <input type="text" placeholder="Last Name" /> */}
        <br />
      </div>
      <div className="input email">
        <label>Email</label>
        <br />
        <input type="email" value={fakeUser.email} />
        <br />
      </div>
      <div className="input pw">
        <label>Password</label>
        <br />
        <input type="password" value={fakeUser.password} />
      </div>
      <div className="loation">
        <label>My Community</label> <br />
        <select
          id="cityDropdown"
          // defaultValue={fakeUser.location}
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">{fakeUser.location}</option>
          {cityNames.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>
      <div className="setting-buttons">
        <Button
          title="Logout"
          border="3px solid #1d828e"
          bgColor="white"
          radius="20px"
          color="#1d828e"
          margin="0 25px 0 0"
        />
        <Button
          title="Save"
          color="#ffffff"
          border="none"
          bgColor="linear-gradient(180deg, #fddb70 0%, #fead5e 100%)"
          radius="18px"
        />
      </div>
    </div>
  );
}
