import React, { useState, useEffect } from "react";
import axios from "axios";
import "@pages/Back-office/Rocket.css";

/* eslint-disable react/prop-types */

function Modal() {
  const [planets, setPlanets] = useState();
  const [vessel, setvessel] = useState({
    Name: "",
    Picture: "",
    Places: "",
    PriceWeek: "",
    AssuranceDate: "",
    ControlDate: "",
  });

  //   const handleButtonCancel = () => {
  //     setDisplayModal(false);
  //   };

  const methodOnChange = (key, value) => {
    const newVessel = { ...vessel };
    newVessel[key] = value;
    setvessel(newVessel);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/planets`)
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const settingADD = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/vessels`, {
        ...vessel,
      })
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center w-full pt-20 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-black shadow-xl transition-all max-w-lg">
            <div className="pt-5 pb-4 ml-32 mx-48">
              <div className="mt-3 text-center sm:text-left w-64">
                <h3
                  className="text-lg text-center font-medium leading-6 text-white"
                  id="modal-title"
                >
                  Add a vessel 🚀
                </h3>
                <div>
                  <h3 className="text-white mt-5 mb-1">Name</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="Name"
                      value={vessel.Name}
                      onChange={(e) =>
                        methodOnChange(e.target.name, e.target.value)
                      }
                      name="Name"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Picture</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="URL"
                      value={vessel.Picture}
                      onChange={(e) =>
                        methodOnChange(e.target.name, e.target.value)
                      }
                      name="Picture"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Company</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="Company"
                      value="SpaceX"
                      name="Company_idCompany"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Places</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="Places"
                      value={vessel.Places}
                      onChange={(e) =>
                        methodOnChange(e.target.name, e.target.value)
                      }
                      name="Places"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Price per week</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="Price"
                      value={vessel.PriceWeek}
                      onChange={(e) =>
                        methodOnChange(e.target.name, e.target.value)
                      }
                      name="PriceWeek"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Insurance</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="AAAA-MM-DD"
                      value={vessel.AssuranceDate}
                      onChange={(e) =>
                        methodOnChange(e.target.name, e.target.value)
                      }
                      name="AssuranceDate"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Technical Control</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="AAAA-MM-DD"
                      value={vessel.ControlDate}
                      onChange={(e) =>
                        methodOnChange(e.target.name, e.target.value)
                      }
                      name="ControlDate"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Planets</h3>
                  <div className="flex pb-1">
                    <select
                      className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      name="Planets_idPlanets"
                      onChange={(e) => {
                        methodOnChange(e.target.name, e.target.value);
                      }}
                    >
                      <option key="0" value="" disabled selected hidden>
                        Select a planet 🌑
                      </option>
                      {planets &&
                        planets.map((planet) => {
                          return (
                            <option value={planet.id}>{planet.Name}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 pb-5" />
            <button
              type="button"
              className="btnaddvessel discover text-black border-solid border-2 rounded-xl px-6ml-32 mx-48 mb-6"
              onClick={() => settingADD()}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
