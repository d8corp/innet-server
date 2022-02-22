'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var httpProxy = require('http-proxy');
var Action = require('../../action/Action/Action.js');
var constants = require('../../constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var httpProxy__default = /*#__PURE__*/_interopDefaultLegacy(httpProxy);

var proxyServer = httpProxy__default["default"].createProxyServer({});
function proxy(_a, handler) {
    var _b = _a.props, to = _b.to, _c = _b.secure, secure = _c === void 0 ? false : _c;
    var _d = handler[Action.ACTION], req = _d.req, res = _d.res;
    delete req.headers.host;
    proxyServer.web(req, res, { target: to, secure: secure });
    return constants.CONTINUE;
}

exports.proxy = proxy;
