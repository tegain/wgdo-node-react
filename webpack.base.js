const path = require('path');

module.exports = {
	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	},
	resolve: {
		alias: {
			'@Root': path.resolve(__dirname),
			'@Api': path.resolve(__dirname, 'api/'),
			'@Server': path.resolve(__dirname, 'server/'),
			'@Client': path.resolve(__dirname, 'server/client/'),
			'@Admin': path.resolve(__dirname, 'server/client/admin/'),
			'@App': path.resolve(__dirname, 'server/client/app/')
		}
	},
	devtool: "sourcemaps"
};
