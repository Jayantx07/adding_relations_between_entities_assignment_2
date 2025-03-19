import React from 'react';
import RatingWidget from './RatingWidget';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>⭐ {product.avgRating} / 5</p>
        <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
