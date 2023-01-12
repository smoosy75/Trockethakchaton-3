import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Departures.css";

function Departures() {
  const planets = [
    { name: "Earth", img: "../assets/earth.png", desc: "notre planète bleu " },
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
      <h1 className="title-vessels">Vessels Availabes</h1>
      <div className="cardContainer">
        {planets.map((planet) => (
          <div key={planet.name}>
            <div className="card">
              <h2>{planet.name}</h2>
              <img src={planet.img} alt="img" />
              <p>{planet.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Departures;
