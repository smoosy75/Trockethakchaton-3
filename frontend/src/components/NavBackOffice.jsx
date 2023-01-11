import { Link } from "react-router-dom";

function NavBackOffice() {
  return (
    <nav className="p-7 w-full bg-black">
      <ul className="flex justify-center text-xl">
        <Link
          to="/"
          className="hover:text-white focus:text-white text-white mr-4"
        >
          Profile
        </Link>
        <Link
          to="/Rocket"
          className="hover:text-white focus:text-white text-white ml-4"
        >
          Rocket
        </Link>
      </ul>
    </nav>
  );
}

export default NavBackOffice;
