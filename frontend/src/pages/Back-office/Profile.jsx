import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import mail from "../../assets/icones/mail.png";
import compte from "../../assets/icones/compte.png";
import verrou from "../../assets/icones/verrou.png";

import "./Profile.css";

function Profile() {
  const { id } = useParams();
  const [mySetting, setMySetting] = useState({
    id: null,
    email: "",
    name: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const methodOnChange = (place, value) => {
    const newUser = { ...mySetting };
    newUser[place] = value;
    setMySetting(newUser);
  };

  const updateSetting = (data) => {
    setMySetting({
      id: data.id,
      email: data.Email,
      name: data.Name,
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/company/${id}`)
      .then((response) => response.json())
      .then((users) => updateSetting(users))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black h-screen">
      <div className="flex justify-center pt-8">
        <div className="w-96">
          <h2 className="text-white text-2xl mb-5">SpaceX</h2>
          <div>
            <h3 className="text-white mt-5 mb-1">Email</h3>
            <div className="flex pb-1 border-b-2 border-white">
              <img className="w-4 m-1 mr-3" src={mail} alt="icone mail" />
              <input
                className="bg-black CouleurtextJauneC"
                type="text"
                placeholder="Email"
                value={mySetting.email}
                onChange={(e) => methodOnChange(e.target.name, e.target.value)}
                name="email"
              />
            </div>
          </div>
          <div>
            <h3 className="text-white mt-5 mb-1">Name of compagny</h3>
            <div className="flex pb-1 border-b-2 border-white">
              <img className="w-4 m-1 mr-3" src={compte} alt="icone mail" />
              <input
                className="bg-black CouleurtextJauneC"
                type="text"
                placeholder="Compagny"
                value={mySetting.name}
                onChange={(e) => methodOnChange(e.target.name, e.target.value)}
                name="name"
              />
            </div>
          </div>
          <div>
            <h3 className="text-white mt-5 mb-1">New password</h3>
            <div className="flex pb-1 border-b-2 border-white">
              <img className="w-4 m-1 mr-3" src={verrou} alt="icone mail" />
              <input
                className="bg-black CouleurtextJauneC"
                type="text"
                placeholder="Enter your new password"
                value={mySetting.newPassword}
                onChange={(e) => methodOnChange(e.target.name, e.target.value)}
                name="newPassword"
              />
            </div>
          </div>
          <div>
            <h3 className="text-white mt-5 mb-1">Confirm new password</h3>
            <div className="flex pb-1 border-b-2 border-white">
              <img className="w-4 m-1 mr-3" src={verrou} alt="icone mail" />
              <input
                className="bg-black CouleurtextJauneC"
                type="text"
                placeholder="Enter your new password"
                value={mySetting.confirmNewPassword}
                onChange={(e) => methodOnChange(e.target.name, e.target.value)}
                name="confirmNewPassword"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btnaddProfil" type="button">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
