// for backend
// save button
// import the user's data -> when they click setting, their info should be displayed

import React, { useState } from "react";

// styles
import "../styles/components/SettingTab.scss";

// components
import RatingProfile from "./RatingProfile";
import Button from "./Button";

// images
import ratingSecond from "../img/rating-second.png";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="setting-cont">
      <RatingProfile ratingImage={ratingSecond} margin="0 0 30px 0" />
      <div className="input name">
        <label>Name</label>
        <br />
        <input type="text" defaultValue={fakeUser.name} />
        <br />
      </div>
      <div className="input email">
        <label>Email</label>
        <br />
        <input type="email" defaultValue={fakeUser.email} />
        <br />
      </div>
      <div className="input">
        <label>Password</label>
        <br />
        <div className="pw">
          <input
            type={showPassword ? "text" : "password"}
            defaultValue={fakeUser.password}
            style={{
              fontSize: showPassword ? "20px" : "30px",
            }}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            size="lg"
            onClick={handleTogglePassword}
          />
        </div>
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
