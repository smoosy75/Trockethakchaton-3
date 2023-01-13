import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Departures from "../pages/Departures";
import Accueil from "./components/Accueil";
import RegisterPage from "./components/RegisterPage";
import Spaceships from "../pages/Spaceships";
import LoginPage from "./components/LoginPage";
import Profile from "./pages/Back-office/Profile";
import Rocket from "./pages/Back-office/Rocket";
import Footer from "../components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Departures" element={<Departures />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Vessels" element={<Spaceships />} />
      </Routes>
      <Routes>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/rocket" element={<Rocket />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
