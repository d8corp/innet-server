'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../../utils/rules/index.js');
var useServerPlugins = require('../../../hooks/useServerPlugins/useServerPlugins.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');
var useAction = require('../../../hooks/useAction/useAction.js');
var JSONString = require('../../../utils/JSONString/JSONString.js');
var helpers = require('../../../utils/rules/helpers.js');
var useParams = require('../../../hooks/useParams/useParams.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const api = () => {
    const handler = innet.useNewHandler();
    const { props = {}, children } = innet.useApp();
    const { prefix = '', title = '', include, exclude, version = process.env.INNET_API_VERSION || '0.0.0' } = props, rest = tslib.__rest(props, ["prefix", "title", "include", "exclude", "version"]);
    const info = Object.assign(Object.assign({}, rest), { version, title });
    const endpoints = {};
    const docs = {
        openapi: '3.1.0',
        info,
        paths: {},
    };
    const plugins = new Set();
    const context = { docs, endpoints, prefix, refRules: {} };
    const condition = (action) => {
        const path = action.parsedUrl.path;
        const url = path.endsWith('/') ? path.slice(0, -1) : path;
        if (!url.startsWith(prefix) || (exclude === null || exclude === void 0 ? void 0 : exclude.test(url))) {
            return false;
        }
        if (include && !include.test(url)) {
            return false;
        }
        return true;
    };
    useServerPlugins.serverPlugins.set(handler, plugins);
    useApi.apiContext.set(handler, context);
    useServerPlugin.useServerPlugin(() => tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        const action = useAction.useAction();
        if (!condition(action))
            return;
        const actionHandler = innet.useNewHandler();
        const path = action.parsedUrl.path;
        const url = path.endsWith('/') ? path.slice(0, -1) : path;
        const { req, res } = action;
        if (url === (prefix || '')) {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSONString.JSONString(docs));
            res.end();
            return null;
        }
        const method = ((_b = (_a = req.method) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : 'get');
        const rawSplitPath = url.slice(prefix.length).split('/').slice(1);
        const splitPath = rawSplitPath.at(-1) ? rawSplitPath : rawSplitPath.slice(0, -1);
        const endpoint = endpoints[method];
        const endpointQueue = endpoint ? [[0, endpoint, {}]] : [];
        while (endpointQueue.length > 0) {
            const [deep, currentEndpoint, params] = endpointQueue.shift();
            const key = splitPath[deep];
            if (deep + 1 === splitPath.length) {
                function run(runEndpoint, params) {
                    var _a, _b, _c, _d, _e;
                    return tslib.__awaiter(this, void 0, void 0, function* () {
                        const pathRules = (_a = runEndpoint.rules) === null || _a === void 0 ? void 0 : _a.path;
                        const headerRules = (_b = runEndpoint.rules) === null || _b === void 0 ? void 0 : _b.header;
                        const cookieRules = (_c = runEndpoint.rules) === null || _c === void 0 ? void 0 : _c.cookie;
                        const searchRules = (_d = runEndpoint.rules) === null || _d === void 0 ? void 0 : _d.search;
                        const bodyRules = (_e = runEndpoint.rules) === null || _e === void 0 ? void 0 : _e.body;
                        if (pathRules) {
                            try {
                                Object.assign(params, pathRules(params, { in: 'path' }));
                            }
                            catch (_f) {
                                return false;
                            }
                        }
                        function checkActionRules(rules, key = 'search') {
                            if (rules) {
                                try {
                                    action[key] = rules(action[key]);
                                }
                                catch (e) {
                                    res.setHeader('Content-Type', 'application/json');
                                    if (e instanceof helpers.RulesError) {
                                        res.statusCode = 400;
                                        res.write(JSONString.JSONString({
                                            error: 'requestValidation',
                                            data: Object.assign(Object.assign({}, e.data), { in: key }),
                                        }));
                                        res.end();
                                    }
                                    else {
                                        console.error(e);
                                        res.statusCode = 500;
                                        res.write(JSONString.JSONString({
                                            error: 'unknown',
                                            data: { in: key },
                                        }));
                                        res.end();
                                    }
                                    return true;
                                }
                            }
                            return false;
                        }
                        if (checkActionRules(headerRules, 'headers'))
                            return true;
                        if (checkActionRules(cookieRules, 'cookies'))
                            return true;
                        if (checkActionRules(searchRules, 'search'))
                            return true;
                        if (bodyRules) {
                            yield action.parseBody();
                            if (!action.body) {
                                res.statusCode = 400;
                                res.setHeader('Content-Type', 'application/json');
                                res.write(JSONString.JSONString({
                                    error: 'requestBodyContentType',
                                }));
                                res.end();
                                return true;
                            }
                            if (checkActionRules(bodyRules, 'body'))
                                return true;
                        }
                        useParams.paramsContext.set(actionHandler, params);
                        for (const plugin of runEndpoint.plugins) {
                            const result = yield plugin();
                            if (result === undefined)
                                continue;
                            innet__default["default"](result, actionHandler);
                            return true;
                        }
                        return true;
                    });
                }
                if ((_d = (_c = currentEndpoint.static) === null || _c === void 0 ? void 0 : _c[key]) === null || _d === void 0 ? void 0 : _d.plugins) {
                    if (!(yield run((_e = currentEndpoint.static) === null || _e === void 0 ? void 0 : _e[key], params)))
                        continue;
                    return null;
                }
                if (currentEndpoint.dynamic) {
                    for (const dynamicEndpoint of currentEndpoint.dynamic) {
                        if (dynamicEndpoint.plugins) {
                            if (!(yield run(dynamicEndpoint, Object.assign(Object.assign({}, params), { [dynamicEndpoint.key.slice(1, -1)]: key }))))
                                continue;
                            return null;
                        }
                    }
                }
                break;
            }
            if ((_f = currentEndpoint.static) === null || _f === void 0 ? void 0 : _f[key]) {
                endpointQueue.push([deep + 1, currentEndpoint.static[key], params]);
            }
            if (currentEndpoint.dynamic) {
                for (const dynamicEndpoint of currentEndpoint.dynamic) {
                    endpointQueue.push([deep + 1, dynamicEndpoint, Object.assign(Object.assign({}, params), { [dynamicEndpoint.key.slice(1, -1)]: key })]);
                }
            }
        }
        for (const plugin of plugins) {
            const result = yield plugin();
            if (result === undefined)
                continue;
            const newHandler = Object.create(handler);
            useAction.actionContext.set(newHandler, action);
            innet__default["default"](result, newHandler);
            return null;
        }
    }));
    innet__default["default"](children, handler);
};

exports.api = api;
