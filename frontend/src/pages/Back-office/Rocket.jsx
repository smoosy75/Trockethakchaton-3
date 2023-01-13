import React, { useEffect, useState } from "react";
import InfoRocket from "@components/backofficerocket/InfoRocketCard";
import ModalAdd from "@components/backofficerocket/ModalAdd";
import NavBackOffice from "@components/Back-Office-Composant/NavBackOffice";
import updateMeta from "@services/meta";
import "./Rocket.css";

function Rocket() {
  const [vesselsCompagny, setVesselsCompany] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    updateMeta("List Rocket", "The list of different spaceships");
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/vessels`)
      .then((response) => response.json())
      .then((data) => {
        setVesselsCompany(data);
      })
      .catch((err) => console.error(err));
  }, [displayModal, setDisplayModal]);

  return (
    <>
      <NavBackOffice />
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
            onClick={setDisplayModal}
          >
            ADD
          </button>
          {displayModal && <ModalAdd setDisplayModal={setDisplayModal} />}
        </div>
        <div className="mx-0">
          {vesselsCompagny.map((vessel) => (
            <InfoRocket vessel={vessel} key={vessel.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Rocket;
