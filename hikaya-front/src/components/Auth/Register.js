import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Auth.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // For loading state
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

    // Password length validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Empty field validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: confirmPassword, // Correctly match the field name
      });

      // On successful registration
      Swal.fire("Success", "Registration successful! Please log in.", "success");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      setLoading(false); // Hide loading on error

      if (error.response) {
        if (error.response.status === 409) {
          setError(error.response.data.message);
          Swal.fire("Error", error.response.data.message, "error");
        } else if (error.response.data.errors) {
          setError(Object.values(error.response.data.errors).join(" "));
          Swal.fire("Error", "Registration failed. Please try again.", "error");
        } else {
          setError("Registration failed. Please try again.");
          Swal.fire("Error", "Registration failed. Please try again.", "error");
        }
      } else {
        setError("Registration failed. Please try again.");
        Swal.fire("Error", "Registration failed. Please try again.", "error");
      }
    } finally {
      setLoading(false); // Hide loading after processing
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-heading">Join the Storytellers' Guild</h2>
        <p className="auth-subheading">Start crafting your magical tales today.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="First Name"
            className="auth-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="auth-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          {error && <p className="auth-error">{error}</p>} {/* Display error message */}
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?{" "}
          <button className="auth-link" onClick={() => navigate("/login")}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
