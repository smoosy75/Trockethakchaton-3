import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import NavBackOffice from "@components/Back-Office-Composant/NavBackOffice";
import updateMeta from "@services/meta";
import mail from "../../assets/icones/mail.png";
import compte from "../../assets/icones/compte.png";
import verrou from "../../assets/icones/verrou.png";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.css";

function Profile() {
  const { id } = useParams();
  const [mySetting, setMySetting] = useState({
    id: null,
    email: "",
    nameCompany: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    updateMeta("Settings", "Allows companies to connect to their back office");
  }, []);

  const notify = (msg) => {
    toast(msg);
  };

  const methodOnChange = (place, value) => {
    const newUser = { ...mySetting };
    newUser[place] = value;
    setMySetting(newUser);
  };

  const updateSetting = (data) => {
    setMySetting({
      id: data.id,
      Email: data.Email,
      NameCompany: data.NameCompany,
      Password: data.Password,
      ConfirmPassword: data.ConfirmPassword,
    });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/company/${id}`)
      .then((response) => response.json())
      .then((company) => updateSetting(company))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdateSetting = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(mySetting.Email)) {
      return notify("Email is not correct");
    }
    if (mySetting.Password !== mySetting.ConfirmPassword) {
      return notify("Passwords are not the same");
    }
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/company/${id}`, {
        ...mySetting,
      })
      .then(() => updateSetting())
      .catch((error) => console.error(error));
    return notify("Email is correct");
  };

  return (
    <>
      <NavBackOffice />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bg-black h-screen">
        <div className="flex justify-center pt-8">
          <div className="w-96">
            <h2 className="text-white text-2xl mb-5">{mySetting.name}</h2>
            <div>
              <h3 className="text-white mt-5 mb-1">Email</h3>
              <div className="flex pb-1 border-b-2 border-white">
                <img className="w-4 m-1 mr-3" src={mail} alt="icone mail" />
                <input
                  className="bg-black CouleurtextJauneC"
                  type="text"
                  placeholder="Email"
                  value={mySetting.Email}
                  onChange={(e) =>
                    methodOnChange(e.target.name, e.target.value)
                  }
                  name="Email"
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
                  value={mySetting.NameCompany}
                  onChange={(e) =>
                    methodOnChange(e.target.name, e.target.value)
                  }
                  name="NameCompany"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white mt-5 mb-1">New password</h3>
              <div className="flex pb-1 border-b-2 border-white">
                <img className="w-4 m-1 mr-3" src={verrou} alt="icone mail" />
                <input
                  className="bg-black CouleurtextJauneC"
                  type="password"
                  placeholder="Enter your new password"
                  value={mySetting.Password}
                  onChange={(e) =>
                    methodOnChange(e.target.name, e.target.value)
                  }
                  name="Password"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white mt-5 mb-1">Confirm new password</h3>
              <div className="flex pb-1 border-b-2 border-white">
                <img className="w-4 m-1 mr-3" src={verrou} alt="icone mail" />
                <input
                  className="bg-black CouleurtextJauneC"
                  type="password"
                  placeholder="Enter your new password"
                  value={mySetting.ConfirmPassword}
                  onChange={(e) =>
                    methodOnChange(e.target.name, e.target.value)
                  }
                  name="ConfirmPassword"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="btnaddProfil"
                type="button"
                onClick={handleUpdateSetting}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
