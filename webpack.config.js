const webpack = require('webpack');
const path = require('path');
const build = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        app: path.resolve(process.cwd(), 'src/app/index.js'),
    },
    devtool: build ? '' : 'source-map',
    output: {
        path: path.join(__dirname, 'build/js/'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:
                {
                    presets:['es2015', 'stage-0', 'react']
                }
            },
        ],
    },
    plugins: build ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false, // ...but do not show warnings in the console (there is a lot of them)
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ] : []
};
