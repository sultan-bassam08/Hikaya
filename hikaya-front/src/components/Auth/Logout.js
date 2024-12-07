import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      // If no token exists, simply log the user out locally
      if (!token) {
        localStorage.clear();
        Swal.fire("Success", "Logged out successfully.", "success");
        navigate("/login");
        return;
      }

      // Call the logout endpoint
      await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in headers
          },
        }
      );

      // Clear the token and user data
      localStorage.clear();
      delete axios.defaults.headers.common["Authorization"];

      Swal.fire("Success", "Logged out successfully.", "success");
      navigate("/login");
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        "Something went wrong. You have been logged out locally.",
        "error"
      );
      // Clear local storage and redirect anyway
      localStorage.clear();
      delete axios.defaults.headers.common["Authorization"];
      navigate("/login");
    }
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return null; // Optionally, add a loading spinner or message
}

export default Logout;
