import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";

const Navbar = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/feed">
          <img className="navbar-logo" src={logo} alt="ligthLogo" />
        </Link>
        <div className="navbar-links">
        <Link className="navbar-link" to="/profile">
          add attraction
        </Link>
        <div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
