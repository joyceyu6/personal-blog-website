const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        index: './src/client/index.js',
        post:'./src/client/post.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: {
                    loader: 'file-loader',
                    options: { 
                        outputPath:'images',
                        esModule:false
                    } 
                }
            }           
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
        }),

        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ],
    optimization: {
        minimizer:[new TerserPlugin({}), 
        new OptimizeCssAssetsPlugin({})]
    }
}
