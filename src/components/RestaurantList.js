import React, { useEffect, useContext } from 'react';
import axios from '../api/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import { MessageContext } from '../context/MessageContext';
import { Link } from 'react-router-dom';

function RestaurantList() {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	const { showMessage } = useContext(MessageContext);
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.post('/');
				setRestaurants(res.data.restaurants);
			} catch (error) {
				showMessage({
					type: 'danger',
					text: `There was an error with status ${error?.response?.status} getting all the restaurants!`
				});
			}
		})();
		// eslint-disable-next-line
	}, []);
	const deleteRestaurantHandler = async id => {
		try {
			await axios.delete(`/${id}`);
			setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
			showMessage({
				type: 'success',
				text: 'Successfully deleted restaurant!'
			});
		} catch (error) {
			showMessage({
				type: 'danger',
				text: `There was an error with status ${error?.response?.status} deleting the restaurant please try again!`
			});
		}
	};
	return (
		<div className="list-group">
			<table className="table table-hover table-dark">
				<thead>
					<tr className="bg-primary">
						<th scope="col">Restaurant</th>
						<th scope="col">Location</th>
						<th scope="col">Price Range</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{restaurants?.map((restaurant) => (
						<tr key={restaurant.id}>
							<td className="link"><Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link></td>
							<td>{restaurant.location}</td>
							<td>{'$'.repeat(restaurant.price_range)}</td>
							<td>
								<Link to={`/restaurants/${restaurant.id}/update`}><button className="btn btn-warning">Update</button></Link>
							</td>
							<td>
								<button onClick={() => deleteRestaurantHandler(restaurant.id)} className="btn btn-danger">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div >
	);
}

export default RestaurantList;
