import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import updateMeta from "@services/meta";

function checkout() {
  const [value, setValue] = useState("default");

  const navigate = useNavigate();
  const notify = () => toast("Your order has been booked!");

  function handleClick() {
    notify("Your order has been booked!");
    setTimeout(() => navigate("/"), 4000);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    updateMeta("Payment", "Make payments for your vehicle rental");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative mx-auto w-full bg-black">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-yellow-400 sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-yellow-300 sm:w-20" />
            </h1>
            <form action="" className="mt-10 flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-yellow-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="malik.leboss.mail@fang.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-black shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="card-number"
                  className="text-xs font-semibold text-yellow-400"
                >
                  Card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234-5678-XXXX-XXXX"
                  className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-black shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
                <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-yellow-400">
                  Expiration date
                </p>
                <div className="mr-6 flex flex-wrap">
                  <div className="my-1">
                    <label htmlFor="month" className="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">jan</option>
                      <option value="">feb</option>
                      <option value="">apr</option>
                      <option value="">may</option>
                      <option value="">jun</option>
                      <option value="">jul</option>
                      <option value="">aug</option>
                      <option value="">sept</option>
                      <option value="">oct</option>
                      <option value="">nov</option>
                      <option value="">des</option>
                    </select>
                  </div>
                  <div className="my-1 ml-3 mr-6">
                    <label htmlFor="year" className="sr-only">
                      Select expiration year
                    </label>
                    <select
                      name="year"
                      id="year"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Year</option>
                    </select>
                  </div>
                  <div className="relative my-1">
                    <label htmlFor="security-code" className="sr-only">
                      Security code
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="security-code"
                      placeholder="Security code"
                      className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-black shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="card-name" className="sr-only">
                  Card name
                </label>
              </div>
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              By placing this order you agree to the{" "}
              <a
                href="#oui"
                className="whitespace-nowrap text-yellow-400 underline hover:text-yellow-300"
              >
                Terms and Conditions
              </a>
            </p>
            <button
              onClick={handleClick}
              type="submit"
              className="mt-4 inline-flex  items-center  border-[3px] border-yellow-400 justify-center rounded bg-black py-2.5 px-4 text-base font-semibold tracking-wide text-yellow-400 text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
            >
              Place Order
            </button>
            <ToastContainer
              position="top-center"
              autoClose={10000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />{" "}
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Order summary</h2>
          <div>
            <img
              src="https://images.unsplash.com/photo-1604517087228-4c456fa2b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t " />
          </div>
          <div className="relative">
            <ul className="space-y-5">
              <li className="flex justify-between">
                <div className="inline-flex">
                  <img
                    src="../src/assets/s4.png"
                    alt=""
                    className="max-h-[150px]"
                  />
                  <div className="ml-3">
                    <p className="text-base font-semibold text-white">
                      SPACELUI H35
                    </p>
                    <p className="text-sm font-medium text-white ">
                      FAMILY VESSELS
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">$350.00</p>
              </li>
            </ul>
            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
            <div className="space-y-2">
              <span className=" text-lg font-bold text-yellow-400 mb-10">
                Time of Location:
              </span>
              <form onSubmit={handleSubmit}>
                <select
                  defaultValue={value}
                  onChange={handleChange}
                  name="month"
                  id="month"
                  className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                >
                  <option value="default" disabled hidden>
                    Location Time
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </form>
              <p className="flex justify-between text-lg font-bold text-white">
                <span className="text-yellow-400">Total price:</span>
                <span>$510.00</span>
              </p>
              <p className="flex justify-between text-sm font-medium text-white">
                <span>Vat: 10%</span>
                <span>$55.00</span>
              </p>
            </div>
          </div>
          <div className="relative mt-10 text-white">
            <h3 className="mb-5 text-lg font-bold text-yellow-400">Support</h3>
            <p className="text-sm font-semibold">
              +0567891-653-23235--211{" "}
              <span className="font-light">(Interplanets)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">
              support@TROCKET.com <span className="font-light">(Email)</span>
            </p>
            <p className="mt-2 text-xs font-medium">
              Call us now for payment related issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
