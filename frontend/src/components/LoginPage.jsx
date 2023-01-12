import { React, useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");

  const changeEmail = (e) => {
    if (
      (/^[0-9a-zA-Z@_-\w.]+$/.test(e.target.value) &&
        e.target.value.length <= 50) ||
      !e.target.value
    ) {
      setEmail(e.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="relative flex h-full w-full ">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div className="mb-10 relative">
            <Link to="/">
              <button
                className="text-yellow-400 absolute -top-44 -left-28"
                type="button"
              >
                Home
              </button>
            </Link>
            <p className="text-2xl ">Login</p>
            <p>
              If you don't have an account, you can{" "}
              <Link to="/Register">
                <span className="text-yellow-400 cursor-pointer">
                  {" "}
                  register here !
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
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2.5 block font-medium text-yellow-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={changeEmail}
                  type="email"
                  id="email"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-gray-500 shadow placeholder:opacity-30"
                  placeholder="Malik.leboss@user.com"
                />
              </div>
              <div className="mt-4">
                <label
                  className="mb-2.5 block font-medium text-yellow-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="Password"
                  placeholder="Password"
                  id="password"
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
                  <a href="#s" className="text-sm hover:text-yellow-400">
                    Forgot password
                  </a>
                </div>
              </div>
              <div className="my-10">
                <button
                  type="submit"
                  className="w-full rounded-full p-5 bg-yellow-400 opacity-80 hover:opacity-100"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-blue-600">
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80"
          className="h-full w-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginPage;
