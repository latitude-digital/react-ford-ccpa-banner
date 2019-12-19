const path = require('path');

const webpack = require('webpack');


module.exports = {
    target: 'node',
    devtool: 'source-map',
    mode: 'production',
    entry: {
        index : path.resolve('./src/index.js'),
    },
    output: {
        path: path.resolve('./'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [ '@babel/env', { modules: false }],
                            '@babel/react',
                        ],
                    },
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    // options: {
                    //     modules: true,
                    // },
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'sass-loader',
                }],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};

