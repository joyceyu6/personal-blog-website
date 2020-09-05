# Project: Personal Blog Website

## Project Description
Build out a personal blog website, including custom images, layout, and styling. 

## List of third-party resources
* [html & css courses](www.udacity.com) from Udacity
* [Geonames API](https://www.geonames.org/) from which we get a city's geo location
* [Pixabay API](https://pixabay.com/) from which we get a city's image
* [Weatherbit API](https://www.weatherbit.io/) from which we get weather forecast



## Addtional Notes
**Important**

----------------------------------below is just for my personal reference----------------------------------------------
## Addtional Tools Summary 
* Webserver - Node
* Web application framework for routing - Express
* Build tool - Webpack with dev and prod environments
* Webpack Loaders - babel, style, CSS, sass, MiniCssExtract
* Webpack Plugins - HtmlWebPack, CleanWebpack,OptimizeCssWebPack, TerserWebpack
* Service Worker
* NodeJs/Express API Test - Jest and Supertest

## Install Addtional Tools 
1. Install NPM or upgrade NPM if you already have it installed 
        
        npm install  
        npm install -g npm@latest

2. Install Node package

        npm install express
        npm install body-parser
        npm install cors

3. Install webpack and the command line instructions (CLI) tool using npm

        npm i webpack webpack-cli

4. Install Webpack Dev Server
    
        npm i -D webpack-dev-server

5. Install loaders and plugins

        npm i -D @babel/core @babel/preset-env babel-loader
        npm i -D style-loader node-sass css-loader sass-loader
        npm i -D clean-webpack-plugin
        npm i -D html-webpack-plugin
        npm i -D mini-css-extract-plugin
        npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
        npm install image-webpack-loader --save-dev
        npm install --save-dev file-loader

## Run Addtional Code
1. How to run development environment of the Application

* Open one terminal and run below code

        npm run build-dev

* Open second terminal and start Node server with below commmand

        npm run start

* The website will be running with an automatically opened broswer at http://localhost:8080/

2. How to run production environment of the Application
* Build scripts and run Node server:

        npm run build-prod
        npm run start
* Check the website running at http://localhost:3000/










