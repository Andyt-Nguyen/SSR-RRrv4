// Notice we called this file is called webpack.server
// This is becasue this webpack config is related to the server
const path = require('path');

module.exports = {
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

	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.js?$/, // Test on every file name with the ex .js
				loader: 'babel-loader', // This loader will transpile our code
				exclude: /node_modules/, // Dont run on node_modules
				options: { // Rules to be used when running babel
					presets: [
						'react', // Transpiles our JSX to JS
						'stage-0', // Handles async code
						// Env is a master preset which basically says run all different transpilers
						// that meets the latest 2 versions of all popular browsers
						['env', {targets: {browsers: ['last 2 versions']}}]
					]
				}
			}
		]
	}
}
