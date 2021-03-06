'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var html = require('@innet/html');
var jsx = require('@innet/jsx');
var _switch = require('@innet/switch');
var utils = require('@innet/utils');
var innet = require('innet');
var cookie = require('../plugins/cookie/cookie.js');
var header = require('../plugins/header/header.js');
var router = require('../plugins/router/router.js');
var success = require('../plugins/success/success.js');
var error = require('../plugins/error/error.js');
var cms = require('../plugins/cms/cms.js');
var file = require('../plugins/file/file.js');
var proxy = require('../plugins/proxy/proxy.js');
var redirect = require('../plugins/redirect/redirect.js');
var server = require('../server/server.js');
var serverFn = require('../experimental/serverFn/serverFn.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var html__default = /*#__PURE__*/_interopDefaultLegacy(html);

var arrayPlugins = [
    utils.arrayAsync,
    utils.arrayClear,
    utils.arraySingleLess,
];
var JSXPlugins = {
    server: server.server,
    html: html__default["default"],
    switch: _switch.switchAsync,
    router: router.router,
    cookie: cookie.cookie,
    header: header.header,
    success: success.success,
    error: error.error,
    cms: cms.cms,
    file: file.file,
    proxy: proxy.proxy,
    redirect: redirect.redirect,
};
var fnPlugins = [
    serverFn.serverFn,
];
var objectPlugins = [
    jsx.jsxPlugins(JSXPlugins),
    jsx.jsxTemplate,
];
var promisePlugins = [
    utils.async,
];
var handler = innet.createHandler([
    utils.promise(promisePlugins),
    utils.array(arrayPlugins),
    utils.object(objectPlugins),
    utils.fn(fnPlugins),
]);

exports.JSXPlugins = JSXPlugins;
exports.arrayPlugins = arrayPlugins;
exports["default"] = handler;
exports.fnPlugins = fnPlugins;
exports.objectPlugins = objectPlugins;
exports.promisePlugins = promisePlugins;
