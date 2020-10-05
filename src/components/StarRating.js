import React, { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';

const StarRating = ({ rating, hasTotalRatingNum }) => {
  const stars = [];
  const { totalRatingNum } = useContext(RestaurantContext);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
    else stars.push(<i key={i} className="far fa-star text-warning"></i>);
  }
  return (
    <div className="text-center">
      <span>{stars}</span>{hasTotalRatingNum && <span>({totalRatingNum})</span>}
    </div>
  );
};

export default StarRating;
