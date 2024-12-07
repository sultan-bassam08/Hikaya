import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./storiesList.css";

const StoriesList = ({ query, selectedCategories }) => {
  const [stories, setStories] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  // Access the user ID
  const userId = user ? user.id : null;  // Safely retrieve user.id
  
  useEffect(() => {
    // Fetch stories from the Laravel API
    axios
      .get("http://localhost:8000/api/stories")
      .then((response) => {
        setStories(response.data); // Set the fetched stories to the state
      })
      .catch((error) => {
        console.error("There was an error fetching the stories!", error);
      });
  }, []);

  // Filter stories based on search query and selected categories
  const filteredStories = stories.filter((story) => {
    console.log("Story Categories:", story.category_id); // Log the story's category_id for debugging

    const matchesQuery =
      !query ||
      story.title.toLowerCase().includes(query.toLowerCase()) || // Match the query with the title
      story.content.toLowerCase().includes(query.toLowerCase()); // Match the query with the content

    // Compare the category_id of the story to the selected categories
    const matchesCategory =
      selectedCategories.length === 0 || // If no category is selected, show all stories
      selectedCategories.includes(story.category_id); // Check if story's category_id is in selectedCategories

    return matchesQuery && matchesCategory; // Return stories that match both query and category filter
  });

  return (
    <div className="row">
      {filteredStories.map((story) => (
        <div className="col-lg-4 mb-4" key={story.story_id}>
          <div className="card">
            <img
              src={story.story_picture || "https://via.placeholder.com/600x300"}
              alt="Story"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: story.content.substring(0, 100) + "...",
                }}
              />

              {/* Use Link to route to the readStory component */}
              <Link
                to={`/readStory/${story.story_id}`}
                className="btn btn-outline-success btn-sm"
              >
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
