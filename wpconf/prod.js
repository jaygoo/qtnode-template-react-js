const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    let p = path.resolve(__dirname, '..', dir);
    return p;
}

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
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
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
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