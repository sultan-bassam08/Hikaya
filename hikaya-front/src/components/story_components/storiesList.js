import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './storiesList.css';

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  // Access the user ID
  const userId = user ? user.id : null;  // Safely retrieve user.id
  
  useEffect(() => {
    // Fetch stories from the Laravel API
    axios.get('http://localhost:8000/api/stories')
      .then(response => {
        setStories(response.data);  // Assume the response contains whether each story is liked
      })
      .catch(error => {
        console.error('There was an error fetching the stories!', error);
      });
  }, []);

  // Toggle like/unlike for a story
  const toggleLike = (storyId) => {
    if (userId) {  // Ensure userId is available
      axios.post(`http://localhost:8000/api/stories/${storyId}/toggle-like`, {
        user_id: userId  // Pass the user_id from the parsed user object
      })
      .then(response => {
        // Update the stories array with the new like status
        const updatedStories = stories.map(story => {
          if (story.story_id === storyId) {
            return { ...story, liked: !story.liked };  // Toggle the liked status
          }
          return story;
        });
        setStories(updatedStories);  // Update the state with the modified stories array
      })
      .catch(error => {
        console.error('There was an error toggling the like!', error);
      });
    } else {
      console.error('User is not authenticated');
    }
  };

  return (
    <div className="row">
      {stories.map(story => (
        <div className="col-lg-4 mb-4" key={story.story_id}>
          <div className="card">
            <img
              src={story.story_picture || "https://via.placeholder.com/600x300"}
              alt="Story"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">
                {story.content.substring(0, 100)}...
              </p>
              <Link to={`/readStory/${story.story_id}`} className="btn btn-outline-success btn-sm">
                Read More
              </Link>
              <button
                onClick={() => toggleLike(story.story_id)}
                className="btn btn-outline-danger btn-sm ml-2"
              >
                <i className={story.liked ? "fas fa-heart" : "far fa-heart"}></i> {/* Toggle heart icon */}
                {story.liked ? ' Unlike' : ' Like'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
