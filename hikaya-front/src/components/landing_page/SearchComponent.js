import React, { useState } from "react";
import "./SearchComponent.css";
import StoriesList from "../../components/story_components/storiesList";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    { name: "Adventure", icon: "fas fa-hiking" },
    { name: "Drama", icon: "fas fa-theater-masks" },
    { name: "Fantasy", icon: "fas fa-dragon" },
    { name: "Horror", icon: "fas fa-ghost" },
    { name: "Romance", icon: "fas fa-heart" },
    { name: "Sci-Fi", icon: "fas fa-rocket" },
  ];

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const toggleCategory = (index) => {
    const categoryName = categories[index].name;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryName)
        ? prevCategories.filter((category) => category !== categoryName)
        : [...prevCategories, categoryName]
    );
  };

  return (
    <>
      <div className="search-component">
        <div className="search-bar">
          <div className="search-input-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
          </div>
        </div>

        <div className="categories-container">
          <div className="categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-button ${
                  selectedCategories.includes(category.name) ? "active" : ""
                }`}
                onClick={() => toggleCategory(index)}
              >
                <i className={`${category.icon} category-icon`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pass query and selectedCategories as props to StoriesList */}
      <StoriesList query={query} selectedCategories={selectedCategories} />
    </>
  );
};

export default SearchComponent;
