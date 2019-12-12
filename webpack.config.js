'use strict';

const path = require('path');
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    devtool: 'source-map',
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: true,
                // sourceMap: true,
                terserOptions: {
                    ecma: 8,
                    keep_classnames: true,
                    keep_fnames: false
                }
            })
        ]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    }
};
