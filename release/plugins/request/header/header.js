'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var useThrow = require('../../../hooks/useThrow/useThrow.js');

const header = () => {
    const res = useResponse.useResponse();
    if (!res) {
        useThrow.useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    const { key, value } = jsx.useProps();
    res.setHeader(key, value);
};

exports.header = header;
