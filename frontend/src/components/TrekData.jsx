import React from 'react';
import './Trek.css'; 

const TrekData = ({ title, image, text, listItems }) => {
  return (
    <div className="trip-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{text}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrekData;
