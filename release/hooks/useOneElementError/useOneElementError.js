'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function useOneElementError() {
    const { type } = innet.useApp();
    throw Error(`You can use only one <${type}> in <api>`);
}

exports.useOneElementError = useOneElementError;
