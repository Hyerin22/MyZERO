import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CityDetail from "../pages/CityDetail";
import HowTo from "../pages/HowTo";
import Community from "../pages/Community";
import Setting from "../pages/Setting";
import Store from "../pages/Store";
import MyBuy from "../pages/MyBuy";

export default function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/MyZero" element={<Home />}></Route>
        <Route path="city/:id" element={<CityDetail />}></Route>
        <Route path="/HowTo" element={<HowTo />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Setting" element={<Setting />}></Route>
        <Route path="/Store" element={<Store />}></Route>
        <Route path="/MyBuy" element={<MyBuy />}></Route>
      </Routes>
    </Router>
  );
}
