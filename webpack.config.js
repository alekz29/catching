'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/app.ts',

    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    devtool: 'inline-source-map',

    output: {
        path: distDir,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },


    plugins: [
      // new CleanWebpackPlugin([distDir]),
        new HtmlWebpackPlugin({
            template: 'static/index.html'
        })
    ]
};