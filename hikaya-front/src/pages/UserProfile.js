import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styles from "../components/UserProfile/UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("id");
  const [activeSection, setActiveSection] = useState(
    new URLSearchParams(location.search).get("section") || "complete"
  );
  const [userData, setUserData] = useState(null);
  const [stories, setStories] = useState([]);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user-profile/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [userId]);

  // Fetch stories based on the active section
  useEffect(() => {
    const fetchUserStories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/user-stories/${userId}?status=${activeSection}`
        );
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchUserStories();
  }, [userId, activeSection]);

  const handleTabClick = (section) => {
    setActiveSection(section);
    navigate(`/profile-content?section=${section}`);
  };

  const renderStories = () =>
    stories.map((story) => (
      <li key={story.story_id}>
        <div className={`timeline-time ${styles.timelineTime}`}>
          <span className="date">
            {new Date(story.created_at).toLocaleDateString()}
          </span>
          <span className="time">
            {new Date(story.created_at).toLocaleTimeString()}
          </span>
        </div>
        <div className={`timeline-body ${styles.timelineBody}`}>
          <h5 className={styles.storyTitle}>{story.title}</h5>
          <p>{story.content}</p>
          {story.story_picture && <img src={story.story_picture} alt="Story" />}
        </div>
      </li>
    ));

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-md-12">
          <div className={`content content-full-width ${styles.content}`}>
            <div className={`profile ${styles.profile}`}>
              <div className={`profile-header ${styles.profileHeader}`}>
                <div className={`profile-header-cover ${styles.profileHeaderCover}`}></div>

                <div className={`profile-header-content ${styles.profileHeaderContent}`}>
                  <div className={`profile-header-img ${styles.profileHeaderImg}`}>
                    <img
                      src={userData?.profile_picture || "default_avatar.png"}
                      alt="User Avatar"
                    />
                  </div>

                  <div className={`profile-header-info ${styles.profileHeaderInfo}`}>
                    <h4 className="m-t-10 m-b-5">
                      {userData ? `${userData.first_name} ${userData.last_name}` : "Loading..."}
                    </h4>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/edit-profile")}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>

                <ul className={`profile-header-tab nav nav-tabs ${styles.profileHeaderTab}`}>
                  <li className="nav-item">
                    <button
                      className={`btn btn-secondary ${activeSection === "complete" ? "active" : ""}`}
                      onClick={() => handleTabClick("complete")}
                    >
                      Complete Stories
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`btn btn-secondary ${activeSection === "draft" ? "active" : ""}`}
                      onClick={() => handleTabClick("draft")}
                    >
                      Draft Stories
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`profile-content ${styles.profileContent}`}>
              <ul className={`timeline ${styles.timeline}`}>
                {stories.length > 0 ? renderStories() : <p>No stories to display.</p>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
