import React, { useEffect, useState } from "react";
import InfoRocket from "@components/backofficerocket/InfoRocketCard";
import "./Rocket.css";

function Rocket() {
  const [vesselsCompagny, setVesselsCompany] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/vessels`)
      .then((response) => response.json())
      .then((data) => {
        setVesselsCompany(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black h-screen text-white">
      <div className="flex flex-row justify-center items-center">
        <div className="grid grid-cols-7 justify-between items-center mx-14 font-bold border-b-2 p-6 w-9/12">
          <h1>Name</h1>
          <h1>Picture</h1>
          <h1>Company</h1>
          <h1 className="pl-3">Place</h1>
          <h1>Price / Week</h1>
          <h1>Assurance</h1>
          <h1>Technical Control</h1>
        </div>
        <button
          type="button"
          className="btnaddrocket discover text-black border-solid border-2 rounded-xl px-6 mx-3 w-3/12"
        >
          ADD
        </button>
      </div>
      <div className="mx-0">
        {vesselsCompagny.map((vessel) => (
          <InfoRocket vessel={vessel} key={vessel.id} />
        ))}
      </div>
    </div>
  );
}

export default Rocket;
