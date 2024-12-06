import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Error", "Please fill in all fields", "error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", { email, password });

      const { token, user } = response.data;
      localStorage.setItem("token", token); // Store the token
      localStorage.setItem("user", JSON.stringify(user)); // Store user info (optional)

      // Set token as default header for future requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      Swal.fire("Success", "Login successful", "success");
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        Swal.fire("Invalid login", error.response.data.message || "Login failed", "error");
      } else {
        Swal.fire("Error", "Network error. Please try again.", "error");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-heading">Welcome Back, Storyteller!</h2>
        <p className="auth-subheading">Log in to continue your magical journey.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-button">Log In</button>
        </form>
        <p className="auth-switch">
          New to the world of stories?{" "}
          <button className="auth-link" onClick={() => navigate("/register")}>
            Register
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
