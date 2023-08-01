import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CityDetail from "../pages/CityDetail";

export default function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="city/:id" element={<CityDetail />}></Route>
      </Routes>
    </Router>
  );
}
