// This will be the entry point for our client webpack
// Treat this file as if this is only for React only or
// other js frameworks you would usually use to start the application

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Handle async request
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk))
// The reason why we use hydrate is because we are rendering
// our app on the server and we inject or breath life in to
// it on the browser. This whole process of rendering the app
// on the server and injecting react into it is known as hydration.
ReactDOM.hydrate(
	<Provider>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));
