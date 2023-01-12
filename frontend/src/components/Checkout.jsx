import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function checkout() {
  const notify = () => toast("Your order has been booked!");
  return (
    <div className="bg-black flex h-screen relative mx-auto  border-[3px] border-yellow-400">
      <div className="mx-auto basis-1/2 w-auto max-w-lg">
        <h2 className="text-[#FFDB1E] text-2xl font-medium ">
          <span className="underline">Secure</span> checkout
        </h2>
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
              placeholder="malik.leboss@mail.com"
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
                  <option value="">Month</option>
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
            href="#ss"
            className="whitespace-nowrap text-yellow-400 underline hover:text-yellow-100"
          >
            Terms and Conditions
          </a>
        </p>
        <button
          onClick={notify}
          type="submit"
          className="mt-4 inline-flex  items-center  border-[3px] border-yellow-400 justify-center rounded bg-black py-2.5 px-4 text-base font-semibold tracking-wide text-yellow-400 text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
        >
          Place Order
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default checkout;
