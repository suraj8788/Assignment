import React from 'react';
import './NotFound.css'; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go Back Home</a>
    </div>
  );
};

export default NotFound;
