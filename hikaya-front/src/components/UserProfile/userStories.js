import React from 'react';
import './userStories.css'; // Import the CSS file for styling
const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user.id : null;
const Book = () => {
  return (
    <div className="book">
    <p>Hello</p>
    <div
      className="cover"
      style={{
        backgroundImage: `url('http://127.0.0.1:8000/storage/${user.profile_picture}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <p>hover me</p>
    </div>
  </div>
  );
};

export default Book;
