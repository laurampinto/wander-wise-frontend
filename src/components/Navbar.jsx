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
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo" src={logo} alt="ligthLogo" />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/login">
            Login
          </Link>

          <Link className="navbar-link" to="/signup">
            Signup
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
