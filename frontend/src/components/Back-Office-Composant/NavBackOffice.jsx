import { Link } from "react-router-dom";

import "./NavBackOffice.css";

function NavBackOffice() {
  return (
    <nav className="p-7 w-full bg-black">
      <ul className="flex justify-center text-xl">
        <Link to="/" className="CouleurtextJauneBackOffice text-white mr-4">
          Profile
        </Link>
        <Link
          to="/Rocket"
          className="CouleurtextJauneBackOffice text-white ml-4"
        >
          Rocket
        </Link>
      </ul>
    </nav>
  );
}

export default NavBackOffice;
