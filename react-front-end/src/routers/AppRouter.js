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

  const [state, setState] = useState({
    user: { id: 1 },
  });


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/MyZero" element={<Home user={state.user.id}/>}></Route>
        <Route path="city/:id" element={<CityDetailLayout user={state.user.id}/>}></Route>
        <Route path="/HowTo" element={<HowTo user={state.user.id}/>}></Route>
        <Route path="/Community" element={<Community user={state.user.id}/>}></Route>
        <Route path="/Setting" element={<Setting user={state.user.id} />}></Route>
        <Route path="/Reward" element={<Store user={state.user.id}/>}></Route>
        <Route path="/MyBuy" element={<MyBuy user={state.user.id}/>}></Route>
      </Routes>
    </Router>
  );
}
