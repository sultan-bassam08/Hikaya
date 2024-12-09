import React, { useState } from "react";
import styles from "./ProfileContent.css";

const ProfileContent = () => {
  const [selectedTab, setSelectedTab] = useState("completeStories"); // Default tab is 'Complete Stories'

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Switch between tabs
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "completeStories":
        return (
          <div className={`timeline ${styles.timeline}`}>
            {/* Add your complete stories content here */}
            <li>
              <div className={`timeline-time ${styles.timelineTime}`}>
                <span className="date">today</span>
                <span className="time">04:20</span>
              </div>
              <div className={`timeline-icon ${styles.timelineIcon}`}>
                <a href="javascript:void(0);">&nbsp;</a>
              </div>
              <div className={`timeline-body ${styles.timelineBody}`}>
                <div className={`timeline-header ${styles.timelineHeader}`}>
                  <span className={`userimage ${styles.userImage}`}>
                    <img src="user_12483574.png" alt="User Avatar" />
                  </span>
                  <span className={`username ${styles.username}`}>
                    <a href="javascript:void(0);">Sean Ngu</a>
                  </span>
                  <span className={`pull-right text-muted ${styles.viewCount}`}>
                    18 Views
                  </span>
                </div>
                <div className={`timeline-content ${styles.timelineContent}`}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui
                    in nunc consequat, in imperdiet nunc sagittis.
                  </p>
                </div>
              </div>
            </li>
          </div>
        );
      case "draftStories":
        return (
          <div>Draft Stories - Add content here</div> // Add the actual content for draft stories
        );
      case "yourActivity":
        return (
          <div>Your Activity - Add content here</div> // Add the activity details here
        );
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className={`container ${styles.container}`}>
      {/* Profile Content */}
      <div className={`profile-content ${styles.profileContent}`}>
        {/* Tabs */}
        <ul
          className={`profile-header-tab nav nav-tabs ${styles.profileHeaderTab}`}
        >
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              className={`nav-link ${styles.navLink}`}
              onClick={() => handleTabClick("completeStories")}
            >
              Your Stories
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              className={`nav-link ${styles.navLink}`}
              onClick={() => handleTabClick("draftStories")}
            >
              your drafts
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              className={`nav-link ${styles.navLink}`}
              onClick={() => handleTabClick("yourActivity")}
            >
              Your Activity
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className={`profile-content-body ${styles.profileContentBody}`}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
