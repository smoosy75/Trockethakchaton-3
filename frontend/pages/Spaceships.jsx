import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Spaceships.css";

function Spaceships() {
  const [, setShow] = useState(false);
  const Vessels = [
    {
      name: "Falcon 9",
      picture:
        "https://img1.freepng.fr/20180409/qvw/kisspng-rocket-launch-spacecraft-buran-stock-photography-rockets-5acbece3c5ae92.5420553115233138918097.jpg",
      description:
        "This spaceship is perfect for a trip with family or friends with its 8 bedrooms. You will have the comfort of a 5 star hotel. This comes at the cost of low speed but more time to enjoy the trip.",
      place: "8",
      priceWeek: "1 500",
      assuranceDate: "2023-12-04",
      controlDate: "2023-02-08",
      planets_idPlanets: "6",
      company_idCompany: "1",
    },
    {
      name: "Falcon Heavy",
      picture:
        "https://img2.freepng.fr/20180605/wai/kisspng-spacecraft-elyrian-brides-sancecrea-s-heart-ship-5b173a808779f0.6411407415282489605549.jpg",
      description:
        "Fantastic ship, efficient and fast, it will allow you to travel safely. Discover a multitude of options on board, such as cruise control and take advantage of new generation mirrors.",
      place: "12",
      priceWeek: "2 100",
      assuranceDate: "2023-08-14",
      controlDate: "2022-01-01",
      planets_idPlanets: "8",
      company_idCompany: "2",
    },
    {
      name: "Dragon",
      picture:
        "https://img2.freepng.fr/20180606/zrj/kisspng-spacecraft-clip-art-space-ship-5b17f656c0f1c0.6020330415282970467903.jpg",
      description:
        "Very fast ship to cross the solar system in duo. This very compact vessel has an advantage in terms of its lightness while allowing safe navigation.",
      place: "2",
      priceWeek: "1000",
      assuranceDate: "2023-06-17",
      controlDate: "2023-07-28",
      planets_idPlanets: "3",
      company_idCompany: "4",
    },
    {
      name: "Starship",
      picture:
        "https://e7.pngegg.com/pngimages/955/376/png-clipart-star-citizen-wing-commander-vehicle-industry-spacecraft-star-citizen-spacecraft-vehicle.png",
      description:
        "Fairly heavy and slow vehicle but can carry heavy loads. This utility is one of our best ships in terms of load. Enjoy the scenery aboard the Starship!",
      place: "25",
      priceWeek: "3000",
      assuranceDate: "2023-02-17",
      controlDate: "2023-09-21",
      planets_idPlanets: "1",
      company_idCompany: "5",
    },
    {
      name: "Spaceflight",
      picture:
        "https://e1.pngegg.com/pngimages/402/945/png-clipart-helicoptere-vaisseau-spatial-art-conceptuel-vaisseau-spatial-conception-de-vaisseau-spatial-dessin-espace-science-fiction.png",
      description:
        "Commercial vehicle is a vehicle capable of carrying out very different functions, generally for professional purposes.",
      place: "10",
      priceWeek: "2000",
      assuranceDate: "2022-04-11",
      controlDate: "2023-05-11",
      planets_idPlanets: "2",
      company_idCompany: "3",
    },
  ];
  return (
    <div>
      <Header />
      <div>
        <h1 className="title-vessels">Vessels Availabes on </h1>
        <div className="cardContainer">
          {Vessels.map((vessels) => (
            <div key={vessels.name}>
              <div className="card">
                <img src={vessels.picture} alt="img" />
                <h2 className="text-yellow-400 font-bold">{vessels.name}</h2>
                <p>Place: {vessels.place}</p>
                <div className="justify-between">
                  {/* {show &&  show={show} />} */}
                  <button
                    className="seemore"
                    onClick={() => setShow(true)}
                    type="submit"
                  >
                    see more {">>"}
                  </button>
                  <Link to="/checkout">
                    <button className="take" type="submit">
                      take it
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Spaceships;
