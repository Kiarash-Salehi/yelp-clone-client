import React, { useState, useContext } from 'react';
import axios from '../api/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import { MessageContext } from '../context/MessageContext';

function AddRestaurant() {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState('Price Range');
	const { addRestaurant } = useContext(RestaurantContext);
	const { showMessage } = useContext(MessageContext);
	const AddRestaurantSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const restaurant = {
				name,
				location,
				price_range: priceRange
			};
			const res = await axios.post('/add', restaurant);
			addRestaurant(res.data.restaurant);
			setName('');
			setLocation('');
			setPriceRange('Price Range');
			showMessage({
				type: 'success',
				text: 'Successfully added restaurant!'
			});
		} catch (error) {
			showMessage({
				type: 'danger',
				text: `There was an error with status ${error?.response?.status} creating the restaurant please try again!`
			});
		}
	};
	return (
		<div className="mb-4">
			<form onSubmit={AddRestaurantSubmitHandler}>
				<div className="form-row">
					<div className="col-md-3 mx-auto">
						<input
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
							type="text"
							placeholder="Name"
							className="form-control"
							required
						/>
					</div>
					<div className="col-md-3 mx-auto">
						<input
							onChange={(e) => {
								setLocation(e.target.value);
							}}
							value={location}
							type="text"
							placeholder="Location"
							className="form-control"
							required
						/>
					</div>
					<div className="col-md-3 mx-auto">
						<select
							style={{ cursor: "pointer" }}
							className="custom-select mr-sm-2"
							value={priceRange}
							onChange={(e) => {
								setPriceRange(e.target.value);
							}}
							required
						>
							<option disabled>Price Range</option>
							<option value={1}>$</option>
							<option value={2}>$$</option>
							<option value={3}>$$$</option>
							<option value={4}>$$$$</option>
							<option value={5}>$$$$$</option>
						</select>
					</div>
					<button type="submit" className="col-3 btn btn-primary mx-auto">
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddRestaurant;
