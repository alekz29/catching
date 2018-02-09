const path = require('path');
const distDir = path.resolve(__dirname, 'dist');
module.exports = {
    entry: './src/app.ts',
    output: {
        path: distDir,
        filename: 'bundle.js'
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {

        loaders: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.js$/, loader: "source-map-loader" },
            { include: path.resolve(__dirname, "node_modules/pixi.js"), loader: "transform?brfs" }
        ],

    },

    externals: [
        {"pixi.js": "PIXI"}
    ]

};
