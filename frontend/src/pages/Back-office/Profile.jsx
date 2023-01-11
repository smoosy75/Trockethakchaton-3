import React from "react";

import mail from "../../assets/icones/mail.png";

function Profile() {
  return (
    <div className="bg-black h-screen">
      <h2 className="text-white">Spaxe X</h2>
      <div>
        <h3 className="text-white">Email</h3>
        <div className="flex border-b-4 border-white">
          <img className="w-5 m-1" src={mail} alt="icone mail" />
          <input
            type="text"
            placeholder="Email"
            value="spacex@gmail.com"
            name="email"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
