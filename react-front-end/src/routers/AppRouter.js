import React, { useState, useEffect } from "react";
import { redirect, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "../pages/Home";
import CityDetailLayout from "../components/CityDetailLayout";
import HowTo from "../pages/HowTo";
import Community from "../pages/Community";
import Setting from "../pages/Setting";
import Store from "../pages/Store";
import MyBuy from "../pages/MyBuy";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRouter() {
  const storedUser = sessionStorage.getItem('user');
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const [user, setUser] = useState(currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // login
  const login = function(email, password) {
    axios.post("api/login", { email, password })
      .then((res) => {
        setUser(res.data);
        setIsLoggedIn(true);
        console.log("AppRouter res.data", res.data);

      })
      .catch((err) => {
        console.error("connect error:", err.message);
      });
  };
  console.log("AppRouter: user", user);

  // Redirect to the "/MyZero" page after successful login
  if (isLoggedIn) {
    return <redirect to="/MyZero" />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login login={login}/>}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/MyZero" element={<Home user={user?.id}/>}></Route>
        <Route path="city/:id" element={<CityDetailLayout user={user?.id}/>}></Route>
        <Route path="/HowTo" element={<HowTo user={user?.id}/>}></Route>
        <Route path="/Community" element={<Community user={user?.id}/>}></Route>
        <Route path="/Setting" element={<Setting user={user?.id} />}></Route>
        <Route path="/Reward" element={<Store user={user?.id}/>}></Route>
        <Route path="/MyBuy" element={<MyBuy user={user?.id}/>}></Route>
      </Routes>
    </Router>
  );
}
