'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qs = require('qs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);

function stringifySearch(search, options) {
    return qs__default["default"].stringify(search, Object.assign({ encode: false }, options));
}

exports.stringifySearch = stringifySearch;
