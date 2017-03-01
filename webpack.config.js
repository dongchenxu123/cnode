const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname+'./src/',
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.css$/,loader: "style!css"
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
              }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
       
    },
    plugins: [
//   new HtmlWebpackPlugin({
//         template: path.join(__dirname, './src/index.html'),
//   }),
//      new webpack.DefinePlugin({
//    "process.env": { 
//       NODE_ENV: JSON.stringify("production") 
//     }
//  }),
//     new webpack.optimize.OccurenceOrderPlugin(),
//    new webpack.optimize.CommonsChunkPlugin('dist', './dist/bundle.js'),
     new OpenBrowserPlugin({
           url: 'http://localhost:1000'
     }) //直接npm start 后跳转到这个网址上来
    ],
    devServer: {
        contentBase: './src/',
//        historyApiFallback: true,
        hot: true,
        host: '127.0.0.1',
        port: 1000  //这是必须写的
    },
};