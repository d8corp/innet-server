'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');
require('../../FileData/index.js');
var Bin = require('../../FileData/Bin.js');

function bin(value, data) {
    if (!(value instanceof Bin.Bin)) {
        throw new helpers.RulesError('binary', Object.assign({ value }, data));
    }
    return value;
}

exports.bin = bin;
