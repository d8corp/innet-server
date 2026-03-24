'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var path = require('node:path');
require('../file/index.js');
require('../../../hooks/index.js');
var usePath = require('../../../hooks/usePath/usePath.js');
var file = require('../file/file.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

function cms() {
    const { children, dir = process.env.INNET_CMS_DIR || '.', prefix = process.env.INNET_CMS_PREFIX || '/', } = jsx.useProps();
    const handler = innet.useHandler();
    let url = usePath.usePath();
    if (url.startsWith(prefix)) {
        url = url.slice(prefix.length);
    }
    else {
        return innet.innet(children, handler);
    }
    const filePath = path__default["default"].join(dir, url);
    innet.innet({ children, props: { path: filePath }, type: file.file }, handler);
}

exports.cms = cms;
