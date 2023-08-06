import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { currentMonth } from '../provider/pointsUtils';

// styles
import "../styles/components/CityInfo.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// components
import DisplayPointTxt from "./DisplayPointTxt";

// get user's this month point
const getUserPoints = async (user, currentMonth) => {
  try {
    const pointRes = await axios.get(`/api/points/${user.id}/month?months=${currentMonth}`);
    const userPoint = pointRes.data;
    const this_month = userPoint.slice(-1)[0].month_points;

    return { ...user, this_month };
  } catch (error) {
    console.error("Error fetching user points:", error.message);
    return user;
  }
};

export default function CityInfo() {
  // for data
  const { id } = useParams();
  const [state, setState] = useState({
    users: [],
    point: 0,
  });

  // Get city_user's info
  // Get user info
  // Combine city_user data with user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cityUserRes, userRes] = await Promise.all([
          axios.get(`/api/city-user/${id}`),
          axios.get(`/api/users`)
        ]);

        const cityUserdata = cityUserRes.data;
        const usersData = userRes.data;
        
        const matchedUsers = usersData.filter(user => {
          return cityUserdata.some(cityUser => cityUser.user_id === user.id);
        });

        const getUsersPoints = async () => {
          const usersWithPoints = await Promise.all(matchedUsers.map(user => getUserPoints(user, currentMonth)));

          usersWithPoints.sort((a, b) => b.this_month - a.this_month);
          setState(prev => ({
            ...prev,
            users: usersWithPoints,
          }));
        };

        getUsersPoints();


      } catch (error) {
        console.error("connect error:", error.message);
      }
    };

    fetchData();
  }, []);

  // Get city collected points a month
  useEffect(() => {
    axios.get(`/api/cities/${id}/point`)
      .then((res) => {
        setState(prev => ({
          ...prev,
          point: res.data
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);

  // console.log("CityInfo: data?", state);

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
    calculateCountdown();

    // Update the countdown every hour
    const interval = setInterval(() => {
      calculateCountdown();
    }, 3600);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);


  const navigate = useNavigate();

  return (
    <div className="cityinfo-cont">
      {state && (
        <div>
          <div className="city-top" key={id}>
            <div className="city-name"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="lg"
              />
              <p>{state.point[0]?.city_name}</p>
            </div>
            <div className="city-info">
              <DisplayPointTxt
                text=""
                point={state.point[0]?.total_points}
                size="26px"
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
                {state.users.length > 0 &&
                  state.users.map((user) => (
                    <div className="cityInfo-user" key={user.id}>
                      <p>
                        {(() => {
                          const nineEmail = user.email.slice(0, 12);
                          return nineEmail.slice(0, 3) + "*".repeat(nineEmail.length);
                        })()}
                      </p>
                      <p>{user.this_month} pt</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


