import React, { useState, useEffect } from "react";
import "@pages/Back-office/Rocket.css";

/* eslint-disable react/prop-types */

function Modal({ setDisplayModal }) {
  const [, setPlanets] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/planets`)
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePlanetsChange = (e) => {
    setPlanets(e.target.value);
  };

  const handleButtonCancel = () => {
    setDisplayModal(false);
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
                      value="Name"
                      name="name"
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
                      value="URL"
                      name="url"
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
                      value="Company"
                      name="company"
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
                      value="Numbers"
                      name="places"
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
                      value="In $"
                      name="price"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Assurance</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="Expiration date"
                      value="AAAA-MM-DD"
                      name="expiration date"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Technical Control</h3>
                  <div className="flex pb-1 border-b-2 border-white">
                    <input
                      className="bg-black CouleurtextJauneC"
                      type="text"
                      placeholder="Expiration date"
                      value="AAAA-MM-DD"
                      name="expiration date"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mt-5 mb-1">Planets</h3>
                  <div className="flex pb-1">
                    <select
                      className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      onChange={handlePlanetsChange}
                    >
                      <option>Select a planet 👇</option>
                      {/* {planets.map((planet) => (
                        <option value={planet.value} />
                      ))} */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 pb-5" />
            <button
              type="button"
              className="btnaddvessel discover text-black border-solid border-2 rounded-xl px-6ml-32 mx-48 mb-6"
              onClick={handleButtonCancel}
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
