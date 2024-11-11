import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
    
        className="nav-link"
      >
        Home
      </NavLink>
     
      <NavLink
        to="/BookingForm"
        className="nav-link"
      >
        BookingForm
      </NavLink>
      <NavLink
        to="/rooms"
        className="nav-link"
      >
        Rooms
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;