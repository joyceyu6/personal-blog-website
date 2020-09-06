const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/client/index.js',
        post:'./src/client/post.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: {
                    loader: 'file-loader',
                    options: { 
                        esModule:false
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            inject: true,
            chunks:['index'],
            filename: "index.html",
        }),

        new HtmlWebPackPlugin({
            template: "./src/client/views/post.html",
            inject: true,
            chunks:['post'],
            filename: "post.html",
        })
    ]
}