import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/RestaurantFinder';
import { useHistory } from 'react-router-dom';
import { MessageContext } from '../context/MessageContext';
import '../index.css';

function UpdateRestaurant() {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState(1);
  const { message, setMessage, showMessage } = useContext(MessageContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(`/${id}`);
        setName(res.data.restaurant.name);
        setLocation(res.data.restaurant.location);
        setPriceRange(res.data.restaurant.price_range);
      } catch (error) {
        showMessage({
          type: 'danger',
          text: `There was an error with status ${error?.response?.status} getting the restaurant info!`
        });
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  const updateRestaurantHandler = async (e) => {
    e.preventDefault();
    try {
      const restaurant = {
        name,
        location,
        price_range: priceRange
      };
      await axios.put(`/${id}`, restaurant);
      showMessage({
        type: 'success',
        text: 'Successfully updated restaurant!'
      });
      history.push('/');
    } catch (error) {
      showMessage({
        type: 'danger',
        text: `There was an error with status ${error.response.status} updating the restaurant info please try again!`
      });
    }
  };
  return (
    <div>
      {message && (
        <div className={`alert alert-${message.type} alert-dismissible fade show come-in`} id="alert" role="alert">
          {message.text}
          <button type="button" className="close" onClick={() => setMessage(null)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <form onSubmit={updateRestaurantHandler}>
        <div className="form-group my-4">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="form-control"
            id="name"
          />

        </div>
        <div className="form-group my-4">
          <label htmlFor="location">Location</label>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            type="text"
            className="form-control"
            id="location"
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="price_range">Price Range</label>
          <select
            className="custom-select mr-sm-2"
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value);
            }}
            id="price_range"
          >
            <option value={1}>$</option>
            <option value={2}>$$</option>
            <option value={3}>$$$</option>
            <option value={4}>$$$$</option>
            <option value={5}>$$$$$</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
