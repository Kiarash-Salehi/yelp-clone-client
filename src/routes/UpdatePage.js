import React from 'react';
import UpdateRestaurant from '../components/UpdateRestaurant';

function UpdatePage() {
	document.title = 'Update Restaurant\'s Information - Yelp App';
	return (
		<div>
			<h1 className="text-center">Update Restaurant</h1>
			<UpdateRestaurant />
		</div>
	);
}

export default UpdatePage;
