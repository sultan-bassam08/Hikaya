import React, { useState, useEffect } from "react";
import axios from "../../axiosSetup";
import "./EditProfile.css";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    oldPassword: "",
    newPassword: "",
    profilePic: "user_12483574.png", // Default profile picture
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user");
        const data = await response.json();
        setUserData({
          firstName: data.first_name,
          lastName: data.last_name,
          profilePic: data.profile_picture || "user_12483574.png",
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile_picture", file); // Append the profile picture
      formData.append("firstName", userData.firstName);
      formData.append("lastName", userData.lastName);
      formData.append("oldPassword", userData.oldPassword);
      formData.append("newPassword", userData.newPassword);
  
      axios.put("http://localhost:8000/api/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log("Profile updated", response.data);
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, firstName, lastName } = userData;

    try {
      const response = await fetch("http://localhost:8000/api/user", { // Your API endpoint for updating user data
        method: "PUT", // Change to POST if that's the method you use
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          oldPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Profile updated successfully!");
      } else {
        alert("Error updating profile!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="profile-pic-section">
          <img src={userData.profilePic} alt="Profile" className="profile-pic" />
          <label className="upload-label">
            Change Picture
            <input type="file" onChange={handleProfilePicChange} />
          </label>
        </div>

        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Old Password:
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter old password"
            value={userData.oldPassword}
            onChange={handleChange}
          />
        </label>

        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={userData.newPassword}
            onChange={handleChange}
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
