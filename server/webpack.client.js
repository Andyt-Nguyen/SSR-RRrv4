// This almost the exact same as the server.config.js js file
// the only thing that is changing here is the entry point and
// output of where the path should go.
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	// Tell webpack the root file for the server application
	entry: './src/client/client.js',

	// Tell webpack where to the bundled file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
}

module.exports = merge(baseConfig, config);
