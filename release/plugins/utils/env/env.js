'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');

const env = () => {
    const { children, is, of = 'NODE_ENV', } = jsx.useProps();
    if (Array.isArray(is) ? is.includes(process.env[of]) : process.env[of] === is) {
        innet.innet(children, innet.useHandler());
    }
};

exports.env = env;
