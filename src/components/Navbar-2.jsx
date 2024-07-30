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
        <Link className="navbar-brand" to="/feed">
          <img className="navbar-logo" src={logo} alt="ligthLogo" />
        </Link>
        <div className="button-container">
        <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
