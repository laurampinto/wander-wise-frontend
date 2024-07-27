import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css"

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = { name: username, email, password };

    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/signup",
        newUser
      );
      console.log("successfully signed up", data);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="signup-container">
      <h2>Signup with us!</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signUp-button">
          Sign Up
        </button>
      </form>
      <br></br>
      <p>
        Already signed up with us? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default Signup;
