import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className="navbar-logo" src={logo} alt="ligthLogo" />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/login">
            Login
          </Link>

          <Link className="navbar-link" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
