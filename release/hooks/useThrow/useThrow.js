'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var utils = require('@cantinc/utils');

function useThrow(message) {
    const { type } = innet.useApp();
    throw Error(utils.placeholder(message, { type: typeof type === 'string' ? type : type.name }));
}

exports.useThrow = useThrow;
