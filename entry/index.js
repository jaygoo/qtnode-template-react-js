'use strict';

module.exports = function (args) {
    Object.assign({}, args);

    return async function (next) {

        next();
    };
};
const path = require('path');
const webpack = require('webpack');

const prodconfig = require(path.resolve(path.resolve(__dirname, '../', './wpconf/dev.js')));
let entry = prodconfig.entry;
console.log(entry);
for (let key in entry ) {
    entry[key] = ['webpack-hot-middleware/client?noInfo=true&reload=true', entry[key]];

}
prodconfig.plugins.push(new webpack.HotModuleReplacementPlugin());
prodconfig.entry = entry;

console.log('------------');

console.log(prodconfig);
