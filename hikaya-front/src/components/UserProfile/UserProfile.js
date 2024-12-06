import React from "react";
import styles from "./UserProfile.css";


const UserProfile = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-md-12">
          <div className={`content content-full-width ${styles.content}`}>
            {/* Profile Header */}
            <div className={`profile ${styles.profile}`}>
              <div className={`profile-header ${styles.profileHeader}`}>
                {/* Profile Cover */}
                <div className={`profile-header-cover ${styles.profileHeaderCover}`}></div>

                {/* Profile Content */}
                <div className={`profile-header-content ${styles.profileHeaderContent}`}>
                  {/* Profile Image */}
                  <div className={`profile-header-img ${styles.profileHeaderImg}`}>
                    <img
                      src="user_12483574.png"
                      alt="User Avatar"
                    />
                  </div>

                  {/* Profile Info */}
                  <div className={`profile-header-info ${styles.profileHeaderInfo}`}>
                    <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                    <p className="m-b-10">UXUI + Frontend Developer</p>
                    <button className="btn btn-sm btn-info mb-2" > Edit Profile</button>
                  </div>
                </div>

                {/* Profile Tabs */}
                <ul className={`profile-header-tab nav nav-tabs ${styles.profileHeaderTab}`}>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/bs4-profile-with-timeline-posts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`nav-link_ ${styles.navLink}`}
                    >
                      POSTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/bs4-profile-about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`nav-link_ ${styles.navLink}`}
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/profile-photos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`nav-link_ ${styles.navLink}`}
                    >
                      PHOTOS
                    </a>
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
