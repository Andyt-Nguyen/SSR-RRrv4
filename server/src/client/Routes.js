import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

export default () => {
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route exact path="/hello" component={() => <h1>Hello</h1>} />
		</div>
	);
}
