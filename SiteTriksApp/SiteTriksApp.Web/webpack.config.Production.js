const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config');

module.exports = {
    mode: 'production',
    entry: config.entry,
    resolve: config.resolve,
    module: config.module,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: false
            })
        ]
    },
    output: config.output
};