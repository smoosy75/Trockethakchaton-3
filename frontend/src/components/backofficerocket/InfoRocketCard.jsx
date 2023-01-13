import React from "react";
import axios from "axios";
import crayon from "@assets/icones/crayon.png";
import poubelle from "@assets/icones/poubelle-de-recyclage.png";
import cercleRouge from "@assets/icones/cercle-rouge.png";
import cercleVert from "@assets/icones/cercle-vert.png";

/* eslint-disable react/prop-types */

function InfoRocket({ vessel }) {
  const settingDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/vessels/${id}`)
      .then((company) => {
        window.location.reload(company.id);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-row justify-center items-center ml-24">
      <div className="grid grid-cols-7 gap-4 justify-between justify-items-center items-center font-bold w-10/12 my-2">
        <h1>{vessel.Name}</h1>
        <img className="w-24 h-24" src={vessel.Picture} alt="" />
        <h1>{vessel.NameCompany}</h1>
        <h1>{vessel.Places}</h1>
        <h1>{vessel.PriceWeek} $</h1>
        {new Date() > new Date(vessel.AssuranceDate) && (
          <img className="w-5 mx-3" src={cercleRouge} alt="" />
        )}
        {new Date() <= new Date(vessel.AssuranceDate) && (
          <img className="w-5 mx-3" src={cercleVert} alt="" />
        )}
        {new Date() > new Date(vessel.ControlDate) && (
          <img className="w-5 mx-3" src={cercleRouge} alt="" />
        )}
        {new Date() <= new Date(vessel.ControlDate) && (
          <img className="w-5 mx-3" src={cercleVert} alt="" />
        )}
      </div>
      <div className="ml-24 px-6 mx-3 w-2/12">
        <button type="button">
          <img className="w-5 mx-3" src={crayon} alt="" />
        </button>
        <button type="button" onClick={() => settingDelete(vessel.id)}>
          <img className="w-5 mx-3" src={poubelle} alt="" />
        </button>
      </div>
    </div>
  );
}

export default InfoRocket;
