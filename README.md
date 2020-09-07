# Project: Personal Blog Website

## Project Description
Build out a personal blog website, including custom images, layout, and styling. 

## Important Notes
* I leveraged Node server, Webpack and dev server in the project though not required as I worked course projects backward(i.e., from Capstone to this one)
* For domo purpose, on the homepage, only "Tahoe" has blog post/a secondary web page, "Cancun" and "Sydney" don't 

## Run Code
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

## List of third-party resources
* [html & css courses](www.udacity.com) from Udacity

## Addtional Tools Summary 
**(Not required, for my personal reference only)**
* Webserver - Node
* Web application framework for routing - Express
* Build tool - Webpack with dev and prod environments
* Webpack Loaders - babel, style, CSS, sass, MiniCssExtract, file
* Webpack Plugins - HtmlWebPack, CleanWebpack,OptimizeCssWebPack, TerserWebpack

## Install Addtional Tools 
**(Not required, for my personal reference only)**
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
        npm install --save-dev file-loader











