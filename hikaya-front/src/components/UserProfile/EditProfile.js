import React, { useState } from "react";
import "./EditProfile.css";

const user = JSON.parse(localStorage.getItem('user'));

// Access the user ID
const userId = user ? user.id : null;

const EditProfile = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePic, setProfilePic] = useState("user_12483574.png"); // Default profile picture

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <input type="text" defaultValue="John" />
        </label>

        <label>
          Last Name:
          <input type="text" defaultValue="Doe" />
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
          <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
