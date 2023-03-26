'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var file = require('../file/file.js');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

function cms(_a, handler) {
    var props = _a.props, children = _a.children;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <cms> inside <action>');
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
    return file.file({ props: { path: filePath }, children: children }, handler);
}

exports.cms = cms;
