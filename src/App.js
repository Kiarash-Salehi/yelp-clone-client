import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import { RestaurantContextProvider } from './context/RestaurantContext';
import { MessageContextProvider } from './context/MessageContext';

const App = () => {
	return (
		<RestaurantContextProvider>
			<MessageContextProvider>
				<div className="container">
					<Router>
						<Switch>
							<Route exact path="/restaurants/:id/update">
								<UpdatePage />
							</Route>
							<Route exact path="/restaurants/:id">
								<RestaurantDetailPage />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</Router>
				</div>
			</MessageContextProvider>
		</RestaurantContextProvider>
	);
};

export default App;
