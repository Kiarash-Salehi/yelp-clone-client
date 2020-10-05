import React, { useContext } from 'react';
import StarRating from '../components/StarRating';
import { RestaurantContext } from '../context/RestaurantContext';

function Reviews() {
  const { selectedRestaurantReviews: reviews } = useContext(RestaurantContext);
  return (
    <div className="row row-cols-3 mb-2 d-flex justify-content-around">
      {reviews.map(review => (
        <div key={review.id} className="card text-white bg-primary mb-3 mr-4 col-3">
          <div className="card-header d-flex justify-content-between">
            <span>{review.name}</span>
            <span><StarRating rating={review.rating} /></span>
          </div>
          <div className="card-body">
            <div className="card-text">{review.review}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
