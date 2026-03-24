'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var utils = require('@innet/utils');

function useEffect(effect) {
    innet.innet(effect, utils.callHandler, 1, true);
}

exports.useEffect = useEffect;
