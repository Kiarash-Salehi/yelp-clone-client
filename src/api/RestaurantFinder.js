import axios from 'axios';

export default axios.create({
	baseURL: proces.env.api || 'https://yelp-clone-82.herokuapp.com ' // yelp-clone-82.herokuapp.com  -  localhost:3001
});
