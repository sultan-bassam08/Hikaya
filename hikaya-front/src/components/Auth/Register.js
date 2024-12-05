import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Make sure error state is defined
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors before validation
    setError("");

    // Password match validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Empty field validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    try {
      // Make POST request to register user
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      console.log({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      // On successful registration
      Swal.fire(
        "Success",
        "Registration successful! Please log in.",
        "success"
      );
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      // Handle any error during registration
      if (error.response && error.response.data.errors) {
        console.log(error.response.data.errors);
        setError(Object.values(error.response.data.errors).join(" ")); // Set error from server response
        Swal.fire("Error", "Registration failed. Please try again.", "error");
      } else {
        setError("Registration failed. Please try again.");
        Swal.fire("Error", "Registration failed. Please try again.", "error");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-heading">Join the Storytellers' Guild</h2>
        <p className="auth-subheading">
          Start crafting your magical tales today.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="auth-error">{error}</p>}{" "}
          {/* Display error message */}
          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <a href="/login">Log in here!</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
