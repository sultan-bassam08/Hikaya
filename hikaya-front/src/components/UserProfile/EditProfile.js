import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./EditProfile.css";

const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user.id : null;

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState(""); // New bio field
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user-profile/${userId}`);
        const userData = response.data;
        setUser(userData);
        setFirstName(userData.first_name);
        setLastName(userData.last_name);
        setBio(userData.bio); // Set bio from fetched data
        setProfilePic(userData.profile_picture || "default-avatar.png");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      bio: bio, // Include bio in the update
      old_password: oldPassword,
      new_password: newPassword,
      profile_picture: profilePic,
    };

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/edit-profile/${userId}`,
        updatedData
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Profile updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(`/user-profile/${userId}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to update profile.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="profile-pic-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <label className="upload-label">
            Change Picture
            <input type="file" onChange={handleProfilePicChange} />
          </label>
        </div>

        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
