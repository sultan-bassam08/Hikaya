import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './readStory.css';

const StoryDetail = () => {
  const { id } = useParams();  // Get the story ID from the URL
  const [story, setStory] = useState(null);

  useEffect(() => {
    // Fetch the specific story by ID from the Laravel API
    axios.get(`http://localhost:8000/api/stories/${id}`)
      .then(response => {
        setStory(response.data);  // Set the story data to the state
      })
      .catch(error => {
        console.error('There was an error fetching the story!', error);
      });
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-single gray-bg">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-lg-8 m-15px-tb">
        <article className="article">
      <div className="article-img">
        <img
          src={story.story_picture || "https://www.bootdey.com/image/800x350/87CEFA/000000"} // Default image if story picture is not available
          title={story.title}
          alt="Story"
        />
      </div>
      <div className="article-title">
        <h6>
          <a href="#">{story.category.category_name } story</a>
        </h6>
        <h2>{story.title}</h2>
        <div className="media">
          <div className="avatar">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              title="Author Avatar"
              alt="Author"
            />
          </div>
          <div className="media-body">
            <label>{story.user.first_name + " " +story.user.last_name || "Unknown Author"}</label>
            <span>{new Date(story.updated_at).toLocaleDateString() || "Unknown Date"}</span>
          </div>
        </div>
      </div>
      <div className="article-content">
        <p>{story.content}</p>
      </div>
    
    </article>
          <div className="contact-form article-comment">
            <h4>Leave a Reply</h4>
            <form id="contact-form" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Name"
                      id="name"
                      placeholder="Name *"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Email"
                      id="email"
                      placeholder="Email *"
                      className="form-control"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message *"
                      rows="4"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button className="px-btn theme">
                      <span>Submit</span> <i className="arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 m-15px-tb blog-aside">
          {/* Author */}
          <div className="widget widget-author">
            <div className="widget-title">
              <h3>Meet the Author!</h3>
            </div>
            <div className="widget-body">
              <div className="media align-items-center">
                <div className="avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    title=""
                    alt=""
                  />
                </div>
                <span className="media-body">
                  <br />
                  <h6>Hello, I'm {story.user.first_name +' ' +story.user.last_name}</h6>
                </span>
              </div>
              <p>
              {story.user.bio}
              </p>
            </div>
          </div>
          {/* End Author */}
       
          {/* Latest Post */}
          <div className="widget widget-latest-post">
            <div className="widget-title">
              <h3>More stories by {story.user.first_name +" "+ story.user.last_name}</h3>
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
