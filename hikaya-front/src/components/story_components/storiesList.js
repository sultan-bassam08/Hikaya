import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  './storiesList.css';

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch stories from the Laravel API
    axios.get('http://localhost:8000/api/stories')
      .then(response => {
        setStories(response.data);  // Set the fetched stories to the state
      })
      .catch(error => {
        console.error('There was an error fetching the stories!', error);
      });
  }, []);

  return (
    <div className="row">
      {stories.map(story => (
        <div className="col-lg-4 mb-4" key={story.story_id}>
          <div className="card">
            <img
              src={story.story_picture || "https://via.placeholder.com/600x300"} // Use story image or placeholder
              alt="Story Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">
                {story.content.substring(0, 100)}... {/* Shorten the content */}
              </p>
              <a href={`/stories/${story.story_id}`} className="btn btn-outline-success btn-sm">
                Read More
              </a>
              <a href="#" className="btn btn-outline-danger btn-sm ml-2">
                <i className="far fa-heart"></i> Like
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
