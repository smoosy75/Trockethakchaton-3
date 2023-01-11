import PlanetsCards from "../components/PlanetsCards";
import Header from "../components/Header";
import "./Departures.css";

function Departures() {
  // eslint-disable-next-line no-unused-vars
  const planets = [
    { name: "Earth", img: "../assets/earth.png", desc: "l" },
    { name: "Mars", img: "../assets/mars.png", desc: "l" },
    { name: "Uranus", img: "../assets/uranus.png", desc: "l" },
    { name: "Venus", img: "../assets/venus.png", desc: "l" },
    { name: "Mercury", img: "../assets/mercure.png", desc: "l" },
    { name: "Jupiter", img: "../assets/jupiter.png", desc: "l" },
  ];

  return (
    <div>
      <Header />
      <div className="departures">
        <h1>WHERE IS YOUR DEPARTURES ?</h1>
        <select>
          <option value="">Earth</option>
          <option value="">Mars</option>
          <option value="">Mercury</option>
          <option value="">Jupiter</option>
          <option value="">Venus</option>
          <option value="">Uranus</option>
        </select>
      </div>
      <PlanetsCards />
    </div>
  );
}

export default Departures;
