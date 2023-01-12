import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Spaceships.css";

function Spaceships() {
  const vessels = [
    { name: "spacex", img: "../assets/vaisseau1.png", desc: "Vaisseaux" },
    { name: "spacex", img: "../assets/vaisseau2.png", desc: "Vaisseaux" },
    { name: "spacex", img: "../assets/vaisseau3.png", desc: "Vaisseaux" },
    { name: "spacex", img: "../assets/vaisseau4.png", desc: "Vaisseaux" },
  ];

  return (
    <div>
      <Header />
      <h1 className="title-vessels">Vessels Availabes</h1>
      <div className="cardContainer">
        {vessels.map((vessel) => (
          <div key={vessel.name}>
            <div className="card">
              <h2>{vessel.name}</h2>
              <img src={vessel.img} alt="img" />
              <p>{vessel.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Spaceships;
