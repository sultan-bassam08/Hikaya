import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert"; // SweetAlert
import "./EditProfile.css";

const EditProfile = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePic, setProfilePic] = useState("user_12483574.png"); // Default profile picture
  const navigate = useNavigate(); // Navigation hook

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SweetAlert confirmation
    Swal({
      title: "Profile Updated!",
      text: "Your profile has been successfully updated.",
      icon: "success",
      button: "OK",
    }).then(() => {
      // Navigate back to the UserProfile page
      navigate("/Profile");
    });
  };

  const handleCancel = () => {
    // Redirect to UserProfile
    navigate("/Profile");
  };

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
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <div className="form-actions">
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
