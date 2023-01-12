
import React from "react";
import Departures from "../pages/Departures";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Back-office/Profile";
import Rocket from "./pages/Back-office/Rocket";
import NavBackOffice from "./components/Back-Office-Composant/NavBackOffice";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Departures />
    </div>
    <Router>
      <div className="App">
        <NavBackOffice />
        <Routes>
          <Route path="profile/:id" element={<Profile />} />
          <Route path="rocket" element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
