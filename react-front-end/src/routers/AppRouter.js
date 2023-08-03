import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CityDetailLayout from "../components/CityDetailLayout";
import HowTo from "../pages/HowTo";
import Community from "../pages/Community";
import Setting from "../pages/Setting";
import Store from "../pages/Store";
import MyBuy from "../pages/MyBuy";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/MyZero" element={<Home />}></Route>
        <Route path="city/:id" element={<CityDetailLayout />}></Route>
        <Route path="/HowTo" element={<HowTo />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Setting" element={<Setting />}></Route>
        <Route path="/Reward" element={<Store />}></Route>
        <Route path="/MyBuy" element={<MyBuy />}></Route>
      </Routes>
    </Router>
  );
}
