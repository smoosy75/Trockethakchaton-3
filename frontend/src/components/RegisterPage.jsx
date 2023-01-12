import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="relative flex h-full w-full">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div className="mb-10 relative">
            <Link to="/">
              <button
                className="text-yellow-400 absolute -top-24 -left-28 "
                type="button"
              >
                Home
              </button>
            </Link>
            <p className="text-2xl ">Sign Up</p>
            <p>
              If you already have an account, you can{" "}
              <Link to="/Login">
                <span className="text-yellow-400 cursor-pointer">
                  {" "}
                  login here !
                </span>
              </Link>
            </p>
          </div>

          <div>
            <fieldset className="border-t border-solid border-gray-600">
              <legend className="mx-auto px-2 text-center text-sm">
                login via our secure system
              </legend>
            </fieldset>
          </div>
          <div className="mt-10">
            <form>
              <div>
                <label
                  className="mb-2.5 block font-medium text-yellow-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="mail"
                  id="email"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-gray-500  placeholder:opacity-60"
                  placeholder="Malik.leboss@user.com"
                />
              </div>
              <div className="mt-4">
                <label
                  className="mb-2.5 block font-medium text-yellow-400"
                  htmlFor="email"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-gray-500  placeholder:opacity-60"
                  placeholder="Name of the Company"
                />
              </div>

              <div className="mt-4">
                <label
                  className="mb-2.5 block font-medium text-yellow-400"
                  htmlFor="email"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="email"
                  className="inline-block w-full rounded-full placeholder:text-gray-300 bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                />
              </div>
              <div className="mt-4">
                <label
                  className="mb-2.5 block font-medium text-yellow-400"
                  htmlFor="email"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder=" confirm Password"
                  id="email"
                  className="inline-block w-full rounded-full placeholder:text-gray-300 bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                />
              </div>
              <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="mx-2 text-sm">
                    Remember me
                  </label>
                </div>

                <div>
                  <a href="#ss" className="text-sm hover:text-yellow-400">
                    Forgot password
                  </a>
                </div>
              </div>
              <div className="my-10">
                <button
                  type="submit"
                  className="w-full rounded-full p-5 bg-yellow-400 opacity-80 hover:opacity-100"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-blue-600">
        <img
          src="https://images.unsplash.com/photo-1597635201981-308a4bfd0e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          className="h-full w-full object-fit"
          alt=""
        />
      </div>
    </div>
  );
}

export default RegisterPage;
