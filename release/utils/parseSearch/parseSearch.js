'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qs = require('qs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);

const EMPTY_SEARCH = {};
function parseSearch(search, options) {
    if (!search)
        return EMPTY_SEARCH;
    return qs__default["default"].parse(search, Object.assign({ ignoreQueryPrefix: true }, options));
}

exports.EMPTY_SEARCH = EMPTY_SEARCH;
exports.parseSearch = parseSearch;
