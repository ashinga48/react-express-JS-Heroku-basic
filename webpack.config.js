var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'srcReact');

var config = {
    entry: APP_DIR + '/index.jsx',
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    },
    output: {
        path: BUILD_DIR+'/javascripts',
        filename: 'bundle.js'
    }
};

module.exports = config;