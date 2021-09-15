import axios from 'axios';

export default axios.create({
	baseURL: process.env.api || 'http://localhost:3001/api/v1/restaurants' // yelp-clone-82.herokuapp.com  -  localhost:3001 - /api/v1/restaurants
});
