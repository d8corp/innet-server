'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var handler = require('./handler/handler.js');
var server = require('./server/server.js');
var cookie = require('./plugins/cookie/cookie.js');
var header = require('./plugins/header/header.js');
var router = require('./plugins/router/router.js');
var success = require('./plugins/success/success.js');
var error = require('./plugins/error/error.js');
var cms = require('./plugins/cms/cms.js');
var file = require('./plugins/file/file.js');
var proxy = require('./plugins/proxy/proxy.js');
var redirect = require('./plugins/redirect/redirect.js');
var Action = require('./action/Action/Action.js');



exports.JSXPlugins = handler.JSXPlugins;
exports.arrayPlugins = handler.arrayPlugins;
exports["default"] = handler.handler;
exports.fnPlugins = handler.fnPlugins;
exports.handler = handler.handler;
exports.objectPlugins = handler.objectPlugins;
exports.promisePlugins = handler.promisePlugins;
exports.server = server.server;
exports.cookie = cookie.cookie;
exports.header = header.header;
exports.ROUTER = router.ROUTER;
exports.getMatchReg = router.getMatchReg;
exports.router = router.router;
exports.useRouter = router.useRouter;
exports.success = success.success;
exports.successStatuses = success.successStatuses;
exports.error = error.error;
exports.errorStatuses = error.errorStatuses;
exports.cms = cms.cms;
exports.file = file.file;
exports.proxy = proxy.proxy;
exports.redirect = redirect.redirect;
exports.redirectStatuses = redirect.redirectStatuses;
exports.ACTION = Action.ACTION;
exports.Action = Action.Action;
exports.URL_PARSER = Action.URL_PARSER;
exports.useAction = Action.useAction;
