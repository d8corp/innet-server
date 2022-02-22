'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var Action = require('../../action/Action/Action.js');
var file = require('../file/file.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

function cms(_a, handler) {
    var props = _a.props;
    var action = handler[Action.ACTION];
    var req = action.req;
    if (!req) {
        throw Error('`cms` should be used inside `server`');
    }
    var prefix = props.prefix, dir = props.dir;
    var url = action.path;
    if (prefix) {
        if (url.startsWith(prefix)) {
            url = url.slice(prefix.length);
        }
        else {
            return;
        }
    }
    var filePath = path__default["default"].join(dir, url);
    return file.file({ props: { path: filePath } }, handler);
}

exports.cms = cms;
