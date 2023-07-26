import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
