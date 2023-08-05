import React, { useState, useEffect } from "react";
import axios from "axios";
import { plantLevel, getCitySymbol, currentMonth } from '../hooks/pointsUtils';
  

//styles
import "../styles/components/Sidebar.scss";

// components
import Nav from "../components/Nav";
import RatingProfile from "../components/RatingProfile";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

// images
import ratingSecond from "../img/level02.png";
import vancSymbol from "../img/vancouver-symbol.jpeg";

export default function Sidebar() {

  const [state, setState] = useState({
    user: {id:1},
    this_month:{},
  });

  //get user info
  useEffect(() => {
    axios.get(`/api/users/${state.user.id}`)
      .then((res) => {
        setState(prev => ({
          ...prev,
          user: res.data
        }));
      })
      .catch(err => {
        console.error("connect error:", err.message);
      });
  }, []);


  // get user's this month point
  useEffect(() => {
    axios
      .get(`/api/points/${state.user.id}/month?months=${currentMonth}`)
      .then((res) => {
        
        const this_month = res.data[3].month_points;
        console.log("this_month", this_month);

        setState((prev) => ({
          ...prev,
          this_month,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <RatingProfile ratingImage={plantLevel(state.this_month)} />
        <Profile user={state.user} />
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
