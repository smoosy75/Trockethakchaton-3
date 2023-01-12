import React from "react";
import crayon from "@assets/icones/crayon.png";
import poubelle from "@assets/icones/poubelle-de-recyclage.png";
import cercleRouge from "@assets/icones/cercle-rouge.png";
import cercleVert from "@assets/icones/cercle-vert.png";

/* eslint-disable react/prop-types */

function InfoRocket({ vessels }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-between items-center font-bold w-9/12 my-2">
        <h1 className="w-20">{vessels.Name}</h1>
        <img className="w-20" src={vessels.Picture} alt="" />
        <h1 className="w-20">{vessels.NameCompany}</h1>
        <h1 className="w-20">{vessels.Places}</h1>
        <h1 className="w-20">{vessels.PriceWeek} $</h1>
        {new Date() > new Date(vessels.AssuranceDate) && (
          <img className="w-5 mx-3" src={cercleRouge} alt="" />
        )}
        {new Date() <= new Date(vessels.AssuranceDate) && (
          <img className="w-5 mx-3" src={cercleVert} alt="" />
        )}
        {new Date() > new Date(vessels.ControlDate) && (
          <img className="w-5 mx-3" src={cercleRouge} alt="" />
        )}
        {new Date() <= new Date(vessels.ControlDate) && (
          <img className="w-5 mx-3" src={cercleVert} alt="" />
        )}
      </div>
      <div className="ml-12">
        <button type="button">
          <img className="w-5 mx-3" src={crayon} alt="" />
        </button>
        <button type="button">
          <img className="w-5 mx-3" src={poubelle} alt="" />
        </button>
      </div>
    </div>
  );
}

export default InfoRocket;
