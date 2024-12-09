import React from "react";
import styles from "./ProfileContent.css"; 

const ProfileContent = () => {
    const navigate = useNavigate();

  const handleTabClick = (section) => {
    navigate(`/profile-content?section=${section}`);
        <div className={`container ${styles.container}`}>
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
    {/* Profile Content */}
    <div className={`profile-content ${styles.profileContent}`}>
    {/* Timeline */}
    <ul className={`timeline ${styles.timeline}`}>
    <li>
        {/* Timeline Entry */}
        <div className={`timeline-time ${styles.timelineTime}`}>
        <span className="date">today</span>
        <span className="time">04:20</span>
        </div>
        <div className={`timeline-icon ${styles.timelineIcon}`}>
        <a href="javascript:void(0);">&nbsp;</a>
        </div>
        <div className={`timeline-body ${styles.timelineBody}`}>
        {/* Timeline Header */}
        <div className={`timeline-header ${styles.timelineHeader}`}>
            <span className={`userimage ${styles.userImage}`}>
            <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt="User Avatar"
            />
            </span>
            <span className={`username ${styles.username}`}>
            <a href="javascript:void(0);">Sean Ngu</a>
            </span>
            <span className={`pull-right text-muted ${styles.viewCount}`}>
            18 Views
            </span>
        </div>
        {/* Timeline Content */}
        <div className={`timeline-content ${styles.timelineContent}`}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus
            turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in
            imperdiet nunc sagittis.
            </p>
        </div>
        {/* Timeline Likes */}
        <div className={`timeline-likes ${styles.timelineLikes}`}>
            <div className={`stats-right ${styles.statsRight}`}>
            <span className={`stats-text ${styles.statsText}`}>21 Comments</span>
            </div>
            <div className={`stats ${styles.stats}`}>
            <span className="fa-stack fa-fw stats-icon">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
            </span>
            <span className="stats-total">4.3k</span>
            </div>
        </div>
        {/* Timeline Footer */}
        <div className={`timeline-footer ${styles.timelineFooter}`}>
            <a href="javascript:void(0);" className="m-r-15 text-inverse-lighter">
            <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
            </a>
            <a href="javascript:void(0);" className="m-r-15 text-inverse-lighter">
            <i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
            </a>
        </div>
        {/* Comment Box */}
        <div className={`timeline-comment-box ${styles.timelineCommentBox}`}>
            <div className={`user ${styles.user}`}>
            <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt="User Avatar"
            />
            </div>
            <div className={`input ${styles.input}`}>
            <form>
                <div className="input-group">
                <input
                    type="text"
                    className="form-control rounded-corner"
                    placeholder="Write a comment..."
                />
                <span className="input-group-btn p-l-10">
                    <button
                    className="btn btn-primary f-s-12 rounded-corner"
                    type="button"
                    >
                    Comment
                    </button>
                </span>
                </div>
            </form>
            </div>
        </div>
        </div>
    </li>
    {/* Placeholder for loading */}
    <li>
        <div className={`timeline-icon ${styles.timelineIcon}`}>
        <a href="javascript:void(0);">&nbsp;</a>
        </div>
        <div className={`timeline-body ${styles.timelineBody}`}>Loading...</div>
    </li>
    </ul>
    </div>
    </div>
   );
};
export default ProfileContent;