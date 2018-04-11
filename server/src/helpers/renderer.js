import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/Components/Home';

export default () => {
	const content = renderToString(<Home />);
	
	return html = `
		<html>
			<head>
				<meta />
			</head>
			<body>
				<div id="root">${content}</div>
				<script src="/bundle.js"></script>
			</body>
		</html>
	`;
}
