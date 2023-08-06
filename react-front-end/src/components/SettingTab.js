import React, { useState, useEffect } from "react";
import axios from "axios";
import { plantLevel, currentMonth } from "../helper/pointsUtils";
import { useNavigate } from "react-router-dom";

// styles
import "../styles/components/SettingTab.scss";

// components
import RatingProfile from "./RatingProfile";
import Button from "./Button";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function SettingTab() {
  const [selectedCity, setSelectedCity] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [state, setState] = useState({
    cities: [],
    user: { id: 1 },
    this_month: {},
  });

  const cityNames = {
    1: "Vancouver",
    2: "Burnaby",
    3: "North Vancouver",
    4: "Coquitlam",
    5: "Richmond",
    6: "Langley",
  };

  //get user info
  useEffect(() => {
    axios
      .get(`/api/users/${state.user.id}`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          user: res.data,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  // get user's this month point
  useEffect(() => {
    axios
      .get(`/api/points/${state.user.id}/month?months=${currentMonth}`)
      .then((res) => {
        const this_month = res.data[3].month_points;

        setState((prev) => ({
          ...prev,
          this_month,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  //get city name and id
  useEffect(() => {
    axios
      .get(`/api/cities`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          cities: res.data,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="setting-cont">
      <RatingProfile
        ratingImage={plantLevel(state.this_month)}
        margin="0 0 30px 0"
      />
      <div className="input name">
        <label>Name</label>
        <br />
        <input className="firstName" type="text" defaultValue={state.user.first_name} />
        <input type="text" defaultValue={state.user.last_name} />
        <br />
      </div>
      <div className="input email">
        <label>Email</label>
        <br />
        <input type="email" defaultValue={state.user.email} />
        <br />
      </div>
      <div className="input">
        <label>Password</label>
        <br />
        <div className="pw">
          <input
            type={showPassword ? "text" : "password"}
            defaultValue={state.user.password_digest}
            // style={{
            //   fontSize: showPassword ? "20px" : "30px",
            // }}
            className={showPassword ? "pw-text" : "pw-pw"}
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
          defaultValuevalue={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">Current: {cityNames[state.user.city_id]}</option>
          {state.cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
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
          onclick={goToLogin}
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
