import axios from 'axios';

export default axios.create({
	baseURL: 'https://yelp-clone-82.herokuapp.com/api/v1/restaurants'
});
