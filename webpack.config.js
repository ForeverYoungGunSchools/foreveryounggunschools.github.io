var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'./app/index.js'
	],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
        test: /\.(png|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
    	},
    	{
    		test: /\.jpg/,
    		loader: 'file-loader'
    	}	
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		stats: {
			colors: true
		}
	},
	plugins: [htmlWebpackPluginConfig]
};