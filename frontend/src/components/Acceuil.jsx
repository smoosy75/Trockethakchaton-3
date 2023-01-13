import React, { useEffect } from "react";
import "../pages/background.css";
import "../pages/btn.css";
import { Link } from "react-router-dom";
import Pres from "./Pres";
import "./Accueil.css";
import PresSpace from "./PresSpace";
import updateMeta from "../services/meta";

function Acceuil() {
  useEffect(() => {
    updateMeta("To infinity and beyond", "Take flight with T-rocket");
  }, []);

  return (
    <div>
      <div snap-y snap-mandatory overflow-scroll>
        <div className="bgs">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <img
            className="ml-auto mr-auto w-30 h-30"
            src="../src/assets/logo.png"
            alt="logo"
          />
          <div className="flex items-center justify-center">
            <p className="uppercase text-white text-6xl tracking-[12px] ">
              to infinity and beyond
            </p>
          </div>
          <div className="flex justify-center items-center p-5 flex-row">
            <Link to="/Departures">
              <button className="btn" type="button">
                FLY WITH US
              </button>
            </Link>
            <Link to="/Login">
              <button className="btn" type="button">
                PRO
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen">
        <Pres className="snap-center" />
      </div>
      <div className="h-screen w-screen">
        <PresSpace className="snap-center" />
      </div>
    </div>
  );
}

export default Acceuil;
