// Serve as the root file of our server
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/Components/Home').default;
const app = express();

app.get('/', (req, res) => {
	const content = renderToString(<Home />);

	res.send(content)
});

app.listen(3000, () => console.log(`The server is now listening on port 3000`));
