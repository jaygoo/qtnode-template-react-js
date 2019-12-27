const path = require('path');
// const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
    let p = path.resolve(__dirname, '..', dir);
    return p;
}

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: {
        app: resolve('./src/index.js'),
        index: resolve('./src/page/index/index.js')

    },
    output: {
        path:  resolve( './dist'),
        filename: '[name].js',
        publicPath: resolve('/')
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 2000,
            automaticNameDelimiter: '~',
            name: true,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    plugins: [

        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),

        new HtmlWebpackPlugin({
            filename: 'app.html',
            // trunk: ['app'],
            excludeChunks: ['index'],
            title: 'react标准模板aaa',
            template: './src/static/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // trunk: ['index'],
            excludeChunks: ['app'],
            title: 'react标准模板',
            template: './src/static/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {

        }
    }
};