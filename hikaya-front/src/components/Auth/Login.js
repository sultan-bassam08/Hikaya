import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../pages/AuthContext"; // Import the useAuth hook
import styles from "./Auth.module.css";
import Line1 from "../lines/liftLine";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Access login method from context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Error", "Please fill in all fields", "error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      const { token, user } = response.data;
      login(user, token); // Call login method from context

      Swal.fire("Success", "Login successful", "success");
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      if (error.response) {
        Swal.fire(
          "Invalid login",
          error.response.data.message || "Login failed",
          "error"
        );
      } else {
        Swal.fire("Error", "Network error. Please try again.", "error");
      }
    }
  };

  return (
    <div className={styles.authContainer}>
      <Line1 customStyles={{ zIndex: "0", transform: "rotateY(180deg)" }} />
      <div className={styles.authCard}>
        <h2 className={styles.authHeading}>Welcome Back, Storyteller!</h2>
        <p className={styles.authSubheading}>
          Log in to continue your magical journey.
        </p>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <input
            type="email"
            placeholder="Email"
            className={styles.authInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.authInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.authButton}>
            Log In
          </button>
        </form>
        <p className={styles.authSwitch}>
          New to the world of stories?{" "}
          <button
            className={styles.authLink}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
