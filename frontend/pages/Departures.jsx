import { Link } from "react-router-dom";
import { React, useEffect } from "react";
import Header from "../components/Header";
import updateMeta from "../src/services/meta";
import "./Departures.css";

function Departures() {
  const planets = [
    { img: "../assets/earth.png", desc: "100 vessels avaible" },
    { img: "../assets/mars.png", desc: "53 vessels avaible" },
    { img: "../assets/uranus.png", desc: "42 vessels avaible" },
    { img: "../assets/venus.png", desc: "16 vessels Avaible" },
    { img: "../assets/mercure.png", desc: "12 vessels Avaible" },
    { img: "../assets/jupiter.png", desc: "56 vessels Avaible" },
  ];

  useEffect(() => {
    updateMeta("Departures", "Enjoy your flights with quality service");
  }, []);

  return (
    <div className="bjr">
      <Header />
      <div className="departures">
        <h1>where is your departure ?</h1>
        <div className="ho">
          <select>
            <option value="">Earth</option>
            <option value="">Mars</option>
            <option value="">Mercury</option>
            <option value="">Jupiter</option>
            <option value="">Venus</option>
            <option value="">Uranus</option>
          </select>

          <div>
            <Link to="/vessels">
              <button className="btn" type="button">
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        {planets.map((planet) => (
          <div key={planet.name}>
            <div className="card">
              <img src={planet.img} alt="img" />
              <p> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </p>
              <p>{planet.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departures;
