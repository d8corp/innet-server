'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
var watchState = require('watch-state');
require('../preset/index.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../../utils/rules/index.js');
var useServer = require('../../../hooks/useServer/useServer.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var preset = require('../preset/preset.js');
var Action = require('../../../utils/action/Action.js');
var useAction = require('../../../hooks/useAction/useAction.js');
var JSONString = require('../../../utils/JSONString/JSONString.js');
var helpers = require('../../../utils/rules/helpers.js');
var useParams = require('../../../hooks/useParams/useParams.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const api = () => {
    var _a;
    const handler = innet.useNewHandler();
    const { props = {}, children } = innet.useApp();
    const { server } = useServer.useServer();
    const { prefix = '', title = '', include, exclude } = props, rest = tslib.__rest(props, ["prefix", "title", "include", "exclude"]);
    const info = Object.assign(Object.assign({}, rest), { version: (_a = rest.version) !== null && _a !== void 0 ? _a : '0.0.0', title });
    const endpoints = {};
    const docs = {
        openapi: '3.1.0',
        info,
        paths: {},
    };
    const requestPlugins = new Set();
    const context = { docs, endpoints, prefix, requestPlugins, refRules: {} };
    const condition = action => {
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
    useApi.apiContext.set(handler, context);
    preset.presetCondition.set(handler, condition);
    innet__default["default"](children, handler);
    const listener = (req, res) => tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _b, _c, _d, _e, _f, _g;
        if (res.writableEnded)
            return;
        const action = new Action.Action(req, res);
        const path = action.parsedUrl.path;
        const url = path.endsWith('/') ? path.slice(0, -1) : path;
        if (!condition(action)) {
            return;
        }
        for (const requestPlugin of requestPlugins) {
            const result = requestPlugin(action);
            if (!result)
                continue;
            const newHandler = Object.create(handler);
            useAction.actionContext.set(newHandler, action);
            innet__default["default"](result, newHandler);
            return;
        }
        if (url === (prefix || '')) {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSONString.JSONString(docs));
            res.end();
            return;
        }
        const method = ((_c = (_b = req.method) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : 'get');
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
                        const newHandler = Object.create(runEndpoint.handler);
                        useParams.paramsContext.set(newHandler, params);
                        useAction.actionContext.set(newHandler, action);
                        innet__default["default"](runEndpoint.content, newHandler);
                        return true;
                    });
                }
                if ((_e = (_d = currentEndpoint.static) === null || _d === void 0 ? void 0 : _d[key]) === null || _e === void 0 ? void 0 : _e.content) {
                    if (!(yield run((_f = currentEndpoint.static) === null || _f === void 0 ? void 0 : _f[key], params)))
                        continue;
                    return;
                }
                if (currentEndpoint.dynamic) {
                    for (const dynamicEndpoint of currentEndpoint.dynamic) {
                        if (dynamicEndpoint.content) {
                            if (!(yield run(dynamicEndpoint, Object.assign(Object.assign({}, params), { [dynamicEndpoint.key.slice(1, -1)]: key }))))
                                continue;
                            return;
                        }
                    }
                }
                break;
            }
            if ((_g = currentEndpoint.static) === null || _g === void 0 ? void 0 : _g[key]) {
                endpointQueue.push([deep + 1, currentEndpoint.static[key], params]);
            }
            if (currentEndpoint.dynamic) {
                for (const dynamicEndpoint of currentEndpoint.dynamic) {
                    endpointQueue.push([deep + 1, dynamicEndpoint, Object.assign(Object.assign({}, params), { [dynamicEndpoint.key.slice(1, -1)]: key })]);
                }
            }
        }
        if (context.fallback) {
            const newHandler = Object.create(context.fallback.handler);
            useAction.actionContext.set(newHandler, action);
            innet__default["default"](context.fallback.children, newHandler);
        }
        else {
            res.statusCode = 404;
            res.end();
        }
    });
    server.on('request', listener);
    watchState.onDestroy(() => {
        server.off('request', listener);
    });
};

exports.api = api;
