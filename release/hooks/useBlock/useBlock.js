'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useParam/index.js');
require('../useThrow/index.js');
var useParam = require('../useParam/useParam.js');
var useThrow = require('../useThrow/useThrow.js');

function useBlock(...placements) {
    const param = jsx.useContext(useParam.paramContext);
    if (param && placements.includes(param.props.in)) {
        useThrow.useThrow(`<{type}> cannot be used in patch param <param in="${param === null || param === void 0 ? void 0 : param.props.in}">`);
    }
}

exports.useBlock = useBlock;
