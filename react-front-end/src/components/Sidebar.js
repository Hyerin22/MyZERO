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


export default function Sidebar() {
  // Get stored user data
  const storedUser = sessionStorage.getItem('user');
  const currentUser = storedUser ? JSON.parse(storedUser).id : 0;

  const [state, setState] = useState({
    user: { id: currentUser },
    this_month: {},
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

        const userPoint = res.data;
        const this_month = userPoint.find(item => item.month === currentMonth)?.month_points;

        setState((prev) => ({
          ...prev,
          this_month,
        }));
      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  }, []);

  // logout 
  const logout = () => {
    axios.post('/api/logout')
      .then(() => {
        sessionStorage.clear();
        // setUser(null);
      });
  };


  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <RatingProfile ratingImage={plantLevel(state.this_month)} />
        <Profile user={state.user} />
      </div>
      <div className="nav">
        <Nav logout={logout} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
