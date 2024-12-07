import React, { useState } from "react";
import "./SearchComponent.css";
import StoriesList from "../../components/story_components/storiesList";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    const categoryIndex = parseInt(value); // Convert the string value to an integer

    setSelectedCategories(
      (prevCategories) =>
        checked
          ? [...prevCategories, categoryIndex] // Add category index
          : prevCategories.filter((category) => category !== categoryIndex) // Remove category index
    );
  };

  return (
    <>
      <div className="search-component">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <div className="checkbox-group">
          {["Adventure", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi"].map(
            (category, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  value={index + 1} // Store values starting from 1, not 0
                  onChange={handleCategoryChange}
                  className="category-checkbox"
                />
                <label>{category}</label>
              </div>
            )
          )}
        </div>
        <button className="search-button">Search</button>
      </div>

      {/* Pass query and selectedCategories as props to StoriesList */}
      <StoriesList query={query} selectedCategories={selectedCategories} />
    </>
  );
};

export default SearchComponent;
