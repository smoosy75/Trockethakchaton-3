import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./pages/Back-office/Profile";
import Rocket from "./pages/Back-office/Rocket";
import NavBackOffice from "./components/Back-Office-Composant/NavBackOffice";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBackOffice />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="Rocket" element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
