import { Link } from "react-router-dom";

function NavBackOffice() {
  return (
    <nav>
      <Link to="/"> Profile</Link>
      <Link to="/Rocket"> Rocket</Link>
    </nav>
  );
}

export default NavBackOffice;
