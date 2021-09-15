import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import { MessageContext } from '../context/MessageContext';
import axios from '../api/RestaurantFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

function RestaurantDetailPage() {
	document.title = 'Restaurant Dtails Page - Yelp App';
	const { id } = useParams();
	const {
		selectedRestaurant,
		setSelectedRestaurant,
		setSelectedRestaurantReviews,
		selectedRestaurantReviews,
		setTotalRatingNum
	} = useContext(RestaurantContext);
	const { message, setMessage } = useContext(MessageContext);
	const [totalRating, setTotalRating] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.post(`/${id}`);
				setSelectedRestaurantReviews(res.data.reviews);
				setSelectedRestaurant(res.data.restaurant);
				setTotalRating(res.data.reviews.reduce((total, curr) => {
					return total + curr.rating;
				}, 0) / res.data.reviews.length);
				setTotalRatingNum(res.data.results.reviews);
			} catch (error) {
				setMessage({
					type: 'danger',
					text: `There was an error with satus ${error.response.status} getting restaurant's data!`
				});
			}
		};
		fetchData();
		// eslint-disable-next-line
	}, [selectedRestaurantReviews]);
	return (
		<div>
			<h1 className="text-center">{selectedRestaurant?.name}</h1>
			<h1><StarRating rating={totalRating} hasTotalRatingNum /></h1>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><Link to="/">Home</Link></li>
					<li class="breadcrumb-item active font-weight-bold" aria-current="page">{selectedRestaurant?.name}</li>
				</ol>
			</nav>
			{message && (
				<div className={`alert alert-${message.type} alert-dismissible fade show come-in`} role="alert">
					{message.text}
					<button type="button" className="close" onClick={() => setMessage(null)}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)}
			<AddReview />
			<div className="mt-3">
				<Reviews />
			</div>
		</div>
	);
}

export default RestaurantDetailPage;
