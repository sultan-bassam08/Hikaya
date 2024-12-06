import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/UserProfile/UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleTabClick = (section) => {
    navigate(`/profile-content?section=${section}`); // Pass the section as a query parameter
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-md-12">
          <div className={`content content-full-width ${styles.content}`}>
            {/* Profile Header */}
            <div className={`profile ${styles.profile}`}>
              <div className={`profile-header ${styles.profileHeader}`}>
                {/* Profile Cover */}
                <div
                  className={`profile-header-cover ${styles.profileHeaderCover}`}
                ></div>

                {/* Profile Content */}
                <div
                  className={`profile-header-content ${styles.profileHeaderContent}`}
                >
                  {/* Profile Image */}
                  <div
                    className={`profile-header-img ${styles.profileHeaderImg}`}
                  >
                    <img src="user_12483574.png" alt="User Avatar" />
                  </div>

                  {/* Profile Info */}
                  <div
                    className={`profile-header-info ${styles.profileHeaderInfo}`}
                  >
                    <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                    <p className="m-b-10">UXUI + Frontend Developer</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/edit-profile")}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>

                {/* Profile Tabs */}
                <ul
                  className={`profile-header-tab nav nav-tabs ${styles.profileHeaderTab}`}
                >
                  <li className="nav-item">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleTabClick("complete")}
                    >
                      Complete Stories
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleTabClick("draft")}
                    >
                      Draft Stories
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleTabClick("activity")}
                    >
                      Your Activity
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
