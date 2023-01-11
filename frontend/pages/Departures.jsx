// eslint-disable-next-line import/extensions
import PlanetsCards from "../components/PlanetsCards.jsx";
import Header from "../components/Header";
import "./Departures.css";

function Departures() {
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
