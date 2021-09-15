import React, { useState, useContext } from 'react';
import { MessageContext } from '../context/MessageContext';
import axios from '../api/RestaurantFinder';
import { useParams } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';

function AddReview() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('Rating');
  const [review, setReview] = useState('');
  const { showMessage } = useContext(MessageContext);
  const { id } = useParams();
  const { addReview } = useContext(RestaurantContext);
  const addReviewSubmitHandler = async e => {
    e.preventDefault();
    try {
      const newReview = {
        restaurant_id: id,
        name,
        rating,
        review
      };
      const res = await axios.post(`/${id}/addReview`, newReview);
      addReview(res.data.review);
      setName('');
      setRating('Rating');
      setReview('');
      showMessage({
        type: 'success',
        text: 'Successfully added review!'
      });
    } catch (error) {
      showMessage({
        type: 'danger',
        text: `There was an error with status ${error?.response?.status} adding review!`
      });
    }
  };
  return (
    <div className="mb-2">
      <form onSubmit={addReviewSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" className="form-control" value={name} onChange={e => { setName(e.target.value); }} />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">rating</label>
            <select id="rating" className="custom-select" value={rating} onChange={e => { setRating(e.target.value); }}>
              <option disabled>Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea id="review" className="form-control" value={review} onChange={e => { setReview(e.target.value); }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;
