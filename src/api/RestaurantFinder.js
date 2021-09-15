import axios from 'axios';

export default axios.create({
	baseURL: process.env.api || 'https://yelp-clone-82.herokuapp.com/api/v1/restaurants' // yelp-clone-82.herokuapp.com  -  localhost:3001 - /api/v1/restaurants
});
