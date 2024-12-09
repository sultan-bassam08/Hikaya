import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./readStory.css";

const StoryDetail = () => {
  const { id } = useParams(); // Get the story ID from the URL
  const [story, setStory] = useState(null);
  const [otherStories, setOtherStories] = useState([]);

  useEffect(() => {
    // Fetch the specific story by ID from the Laravel API
    axios
      .get(`http://localhost:8000/api/stories/${id}`)
      .then((response) => {
        setStory(response.data); // Set the story data to the state
        // Fetch other stories by the same author
        axios
          .get(
            `http://localhost:8000/api/stories?author_id=${response.data.user.id}`
          )
          .then((res) => {
            setOtherStories(res.data); // Set other stories to the state
          })
          .catch((error) => {
            console.error("There was an error fetching other stories!", error);
          });
      })
      .catch((error) => {
        console.error("There was an error fetching the story!", error);
      });
  }, [id]);

  if (!story) {
    return <div></div>;
  }

  return (
    <div className="blog-single ">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            <article className="article">
            <div className="article-img">
            <img
              style={{
                width: "100%",            
                maxWidth: "100%",         
                maxHeight: "350px",    
                height: "auto",         
                objectFit: "contain",
              }}
              src={story.story_picture || "https://www.bootdey.com/image/800x350/87CEFA/000000"}  // Default image if none available
              title={story.title}
              alt="Story"
            />
          </div>

              <div className="article-title">
                <h6>
                  <a href="#">{story.category.category_name} story</a>
                </h6>
                <h2>{story.title}</h2>
                
              </div>
              <div className="article-content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: story.content,
                  }}
                />
              </div>
            </article>
          </div>
          <div className="col-lg-4 m-15px-tb blog-aside">
            {/* Author */}
            <div className="widget widget-author">
              <div className="widget-title">
                <h3>Meet the Author!</h3>
              </div>
              <div className="media media-flexed">
                  <div className="avatar">
                    <img
                      src={story.user.profile_picture}
                      title="Author Avatar"
                      alt="Author"
                    />
                  </div>
                  <div className="media-body">
                    <Link to={`/user-profile/${story.user.id}`}>
                      {story.user.first_name + " " + story.user.last_name ||
                      "Unknown Author"}
                    </Link>
                    <span>
                      {new Date(story.updated_at).toLocaleDateString() ||
                        "Unknown Date"}
                    </span>
                  </div>
                </div>
              
            </div>
            {/* End Author */}

            {/* Latest Post */}
            <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>More stories</h3>
              </div>
              <div className="widget-body">
              {otherStories.length > 0 ? (
                <ul>
                  {otherStories.map((otherStory) => (
                    <li key={otherStory.story_id} className="story-item">
                      <div className="story-thumbnail">
                        <img
                          src={otherStory.story_picture} // The image of the story
                          alt={otherStory.title}
                          className="story-img"
                        />
                      </div>
                      <div className="story-title">
                        <Link to={`/readStory/${otherStory.story_id}`}>
                          {otherStory.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No other stories available.</p>
              )}
            </div>

            </div>
            {/* End Latest Post */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
/* <div className="widget-body">
                <div className="media align-items-center media-flexed">
                  <div className="avatar">
                    <img
                      src={story.user.profile_picture}
                      title="Author Avatar"
                      alt="Author"
                    />
                  </div>
                  <div className="avatar-fixed">
                    <img src={story.user.profile_picture} title="" alt="" />
                  </div>
                  <span className="media-body">
                    <br />
                    <h6>
                      Hello, I'm{" "}
                      {story.user.first_name + " " + story.user.last_name}
                    </h6>
                  </span>
                </div>
                <p>{story.user.bio}</p>
              </div> */



/* <div className="media">
                  <div className="avatar">
                    <img
                      src={story.user.profile_picture}
                      title="Author Avatar"
                      alt="Author"
                    />
                  </div>
                  <div className="media-body">
                    <label>
                      {story.user.first_name + " " + story.user.last_name ||
                        "Unknown Author"}
                    </label>
                    <span>
                      {new Date(story.updated_at).toLocaleDateString() ||
                        "Unknown Date"}
                    </span>
                  </div>
                </div> */