import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<React.Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Index} />
							<Route exact path='/lyrics/track/:id' component={Lyrics} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		</Provider>
	);
};

export default App;
