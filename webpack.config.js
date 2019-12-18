const path = require('path');

const webpack = require('webpack');


module.exports = {
    target: 'node',
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
    // optimization: {
    //     namedChunks: true,
    //     namedModules: true,
    //     moduleIds: 'hashed',
    //     runtimeChunk: {
    //         name: entrypoint => `runtime~${entrypoint.name}`,
    //     },
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /node_modules/,
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },
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
                        plugins: [
                            // '@babel/plugin-proposal-class-properties',
                            // '@babel/plugin-syntax-dynamic-import',
                            // '@babel/plugin-proposal-export-default-from',
                        ],
                    },
                }],
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
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

