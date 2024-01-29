const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js', // Change the filename for development
        libraryTarget: 'var',
        library: 'Client',
    },
    mode: 'development',
    devtool: 'source-map', // Consider 'cheap-module-eval-source-map' for faster builds in development
    devServer: {
        port: 8080, // Specify the port for the development server
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Fix the test value for JavaScript files
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),
    ],
};