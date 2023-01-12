import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Departures from "../pages/Departures";
import NavBackOffice from "./components/Back-Office-Composant/NavBackOffice";
import Acceuil from "./components/Acceuil";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Departures" element={<Departures />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
        {/* <Departures />
      <Router></Router>
        <div className="App">
          <NavBackOffice />
          <Routes>
            <Route path="profile/:id" element={<Profile />} />
            <Route path="rocket" element={<Rocket />} />
          </Routes>
        </div>
      </Router> */}
      </div>
    </Router>
  );
}

export default App;
