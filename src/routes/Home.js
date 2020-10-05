import React from 'react';
import Header from '../components/Header';
import AddRestaurant from '../components/AddRestaurant';
import RestaurantList from '../components/RestaurantList';

function Home() {
	document.title = 'All Restaurants - Yelp App';
	return (
		<div>
			<Header />
			<AddRestaurant />
			<RestaurantList />
		</div>
	);
}

export default Home;
