// Notice we called this file is called webpack.server
// This is becasue this webpack config is related to the server
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// Inform webpack to that we're building a bundle for nodeJs,
	// rather than the client
	target: 'node',

	// Tell webpack the root file for the server application
	entry: './src/index.js',

	// Tell webpack where to the bundled file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
