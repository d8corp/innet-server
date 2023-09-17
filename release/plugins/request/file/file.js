'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var fs = require('node:fs');
var mime = require('mime');
require('../../../hooks/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var useThrow = require('../../../hooks/useThrow/useThrow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var mime__default = /*#__PURE__*/_interopDefaultLegacy(mime);

function file() {
    const handler = innet.useHandler();
    const props = jsx.useProps();
    const children = jsx.useChildren();
    const res = useResponse.useResponse();
    if (!res) {
        useThrow.useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    const { path } = props;
    if (fs__default["default"].existsSync(path)) {
        const stat = fs__default["default"].statSync(path);
        if (stat.isFile()) {
            const readStream = fs__default["default"].createReadStream(path);
            const type = mime__default["default"].getType(path);
            const headers = {
                'Content-Length': stat.size,
            };
            if (type) {
                headers['Content-Type'] = type;
            }
            res.writeHead(200, headers);
            readStream.pipe(res);
            return;
        }
    }
    innet__default["default"](children, handler);
}

exports.file = file;
