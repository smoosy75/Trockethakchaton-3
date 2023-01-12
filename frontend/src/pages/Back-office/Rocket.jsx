import React from "react";
import "./Rocket.css";

function Rocket() {
  return (
    <div className="bg-black h-screen text-white">
      <div className="flex flex-row justify-between items-center mx-24 font-bold border-b-2 p-6">
        <h1>Name</h1>
        <h1>Picture</h1>
        <h1>Company</h1>
        <h1>Place</h1>
        <h1>Price / Week</h1>
        <h1>Assurance</h1>
        <h1>Technical Control</h1>
        <button
          type="button"
          className="btnaddrocket discover text-black border-solid border-2  rounded-xl px-6 mx-3"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default Rocket;
