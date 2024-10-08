import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import "./LoginPage.css";
import Navbar from "../components/Navbar";
import { API_URL } from "../config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const { authenticateUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userToLogin = { email, password };

    try {
      const { data } = await axios.post(
        `${API_URL}/auth/login`,
        userToLogin
      );
      console.log("successfully logged in", data);
      localStorage.setItem("authToken", data.authToken);
      await authenticateUser();
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login with us!</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br></br>
          <button className="login-button">Login</button>
        </form>
        <p>
          Not already signed up with us? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
