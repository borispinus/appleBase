var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
        path: './public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
     devServer: {
        historyApiFallback: true,
        hot: true,
    },
    module: {
        loaders: [
		    {
			    test: /\.jsx?$/,       
    			exclude: /node_modules/, 
    			loader: 'babel', 
    			query:
      			{
        			presets:['es2015','react', 'stage-1']
      			}
			},  
			{
        		test: /\.sass$/,
        		loader: ExtractTextPlugin.extract(
    				'style',
				    'css!sass'
				)
      		}

		]
	},
	plugins: [
    	new ExtractTextPlugin('app.css')
 	],
    watch : true
}