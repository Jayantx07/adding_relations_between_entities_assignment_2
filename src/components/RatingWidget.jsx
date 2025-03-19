import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingWidget.css';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);  // Reset rating after submission
    } else {
      alert("Please select a valid rating between 1 to 5");
    }
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`star ${rating >= star || hoveredRating >= star ? 'filled' : ''}`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit} className="submit-btn">Submit Rating</button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
