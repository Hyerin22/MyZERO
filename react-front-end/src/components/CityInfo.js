import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// styles
import "../styles/components/CityInfo.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// components
import DisplayPointTxt from "./DisplayPointTxt";
import TabGroup from "./TabGroup";
import CityTop10 from "./CityTop10";
import CityPrev from "./CityPrev";

// data
import { fakeTop10 } from "../mockdata/fakeData";

export default function CityInfo() {
  // for data
  // const [data, setData] = useState([]);
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

  // for D-day
  const [countdown, setCountdown] = useState(0);

  const calculateCountdown = () => {
    const currentDate = new Date();
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1, // January is 0
      0
    );

    // Calculate the difference in milliseconds
    const timeDiff = lastDayOfMonth.getTime() - currentDate.getTime();

    // Convert milliseconds to days
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;

    setCountdown(daysRemaining);
  };

  useEffect(() => {
    getData();
    calculateCountdown();

    // Update the countdown every second
    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // for the tab menu
  // const tabTypes = ["Top10", "Prev"];
  // const [activeTab, setActiveTab] = useState(tabTypes[0]);

  // const tabPages = {
  //   Top10: CityTop10,
  //   Prev: CityPrev,
  // };

  const navigate = useNavigate();

  const sortedTop10 = fakeTop10.sort((a, b) => b.points - a.points);

  return (
    <div className="cityinfo-cont">
      {city && (
        <div>
          <div className="city-top" key={city.id}>
            <div className="city-name">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="lg"
                onClick={() => {
                  navigate(-1);
                }}
              />
              <p>{city.address.city}</p>
            </div>
            <div className="city-info">
              <DisplayPointTxt
                text=""
                size="26px"
                point="453"
                color="#1d828e"
                pointSize="76px"
                pointMargin="0px 7px"
              />
              <div className="dday">
                <p>D-{countdown}</p>
                <span>will reset on every month</span>
              </div>
            </div>
          </div>
          <div className="cityInfo-tab-cont">
            <div className="cityInfo-tab-container">
              <div className="cityInfo-tab">Top 10</div>
            </div>
            <div className="cityInfo-content-box">
              <div className="ranking">
                <p>1st</p>
                <p>2nd</p>
                <p>3rd</p>
              </div>
              <div className="cityInfo-user-cont">
                {sortedTop10.length > 0 &&
                  sortedTop10.map((user) => (
                    <div className="cityInfo-user" key={user.id}>
                      <p>
                        {user.username.slice(0, 3) +
                          "*".repeat(user.username.length - 3)}
                      </p>
                      <p>{user.points} pt</p>
                    </div>
                  ))}
              </div>
            </div>
            {/* <TabGroup
              types={tabTypes}
              tabPages={tabPages}
              marginL="10px"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              boxBgColor="#F8F8F8"
              boxWidth="850px"
              boxHeight="300px"
              tabMarginR="100px"
              boxPadding="35px 130px"
            /> */}
          </div>
        </div>
      )}
    </div>
  );
}
