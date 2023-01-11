import React from "react";

import mail from "../../assets/icones/mail.png";
import compte from "../../assets/icones/compte.png";
import verrou from "../../assets/icones/verrou.png";

import "./Profile.css";

function Profile() {
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
                value="spacex@gmail.com"
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
                value="SpaceX"
                name="Compagny"
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
                placeholder="NewPassword"
                value="Enter your Password"
                name="NewPassword"
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
                placeholder="NewPassword"
                value="Enter your Password"
                name="NewPassword"
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
