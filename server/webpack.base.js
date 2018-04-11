// Tell webpack to run babel on every file it runs through
// Keeping this the same helps us because we want to be able to
// keep the client side and server have the same syntax
module.exports = {
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
