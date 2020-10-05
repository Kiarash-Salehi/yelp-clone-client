import React, { useState, createContext } from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
	const [restaurants, setRestaurants] = useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState([]);
	const [selectedRestaurantReviews, setSelectedRestaurantReviews] = useState([]);
	const [totalRatingNum, setTotalRatingNum] = useState(selectedRestaurantReviews.length);
	const addRestaurant = (restaurant) => {
		setRestaurants([...restaurants, restaurant]);
	};
	const addReview = (selectedRestaurantReview) => {
		setSelectedRestaurantReviews([...selectedRestaurantReviews, selectedRestaurantReview]);
		setTotalRatingNum(totalRatingNum + 1);
	};
	return (
		<RestaurantContext.Provider
			value={{
				restaurants,
				setRestaurants,
				addRestaurant,
				selectedRestaurant,
				setSelectedRestaurant,
				selectedRestaurantReviews,
				setSelectedRestaurantReviews,
				totalRatingNum,
				setTotalRatingNum,
				addReview
			}}>
			{props.children}
		</RestaurantContext.Provider>
	);
};
