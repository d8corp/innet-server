import { __rest, __awaiter } from 'tslib';
import innet, { useNewHandler, useApp } from 'innet';
import { onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../../utils/rules/index.es6.js';
import { useServer } from '../../../hooks/useServer/useServer.es6.js';
import { apiContext } from '../../../hooks/useApi/useApi.es6.js';
import { Action } from '../../../utils/action/Action.es6.js';
import { responseContext } from '../../../hooks/useResponse/useResponse.es6.js';
import { requestContext } from '../../../hooks/useRequest/useRequest.es6.js';
import { actionContext } from '../../../hooks/useAction/useAction.es6.js';
import { JSONString } from '../../../utils/JSONString/JSONString.es6.js';
import { RulesError } from '../../../utils/rules/helpers.es6.js';
import { paramsContext } from '../../../hooks/useParams/useParams.es6.js';

const api = () => {
    var _a;
    const handler = useNewHandler();
    const { props = {}, children } = useApp();
    const { server } = useServer();
    const { prefix = '', title = '' } = props, rest = __rest(props, ["prefix", "title"]);
    const info = Object.assign(Object.assign({}, rest), { version: (_a = rest.version) !== null && _a !== void 0 ? _a : '0.0.0', title });
    const endpoints = {};
    const docs = {
        openapi: '3.1.0',
        info,
        paths: {},
    };
    const requestPlugins = new Set();
    const context = { docs, endpoints, prefix, requestPlugins, refRules: {} };
    apiContext.set(handler, context);
    const listener = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _b, _c, _d, _e, _f, _g;
        if (res.writableEnded)
            return;
        const action = new Action(req, res);
        const path = action.parsedUrl.path;
        const url = path.endsWith('/') ? path.slice(0, -1) : path;
        if (!url.startsWith(prefix)) {
            return;
        }
        for (const requestPlugin of requestPlugins) {
            const result = requestPlugin(action);
            if (!result)
                continue;
            const newHandler = Object.create(handler);
            responseContext.set(newHandler, res);
            requestContext.set(newHandler, req);
            actionContext.set(newHandler, action);
            innet(result, newHandler);
            return;
        }
        if (url === (prefix || '')) {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSONString(docs));
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
                    return __awaiter(this, void 0, void 0, function* () {
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
                                    if (e instanceof RulesError) {
                                        res.statusCode = 400;
                                        res.write(JSONString({
                                            error: 'requestValidation',
                                            data: Object.assign(Object.assign({}, e.data), { in: key }),
                                        }));
                                        res.end();
                                    }
                                    else {
                                        console.error(e);
                                        res.statusCode = 500;
                                        res.write(JSONString({
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
                                res.write(JSONString({
                                    error: 'requestBodyContentType',
                                }));
                                res.end();
                                return true;
                            }
                            if (checkActionRules(bodyRules, 'body'))
                                return true;
                        }
                        const newHandler = Object.create(runEndpoint.handler);
                        responseContext.set(newHandler, res);
                        requestContext.set(newHandler, req);
                        paramsContext.set(newHandler, params);
                        actionContext.set(newHandler, action);
                        innet(runEndpoint.content, newHandler);
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
            responseContext.set(newHandler, res);
            requestContext.set(newHandler, req);
            actionContext.set(newHandler, action);
            innet(context.fallback.children, newHandler);
        }
        else {
            res.statusCode = 404;
            res.end();
        }
    });
    server.on('request', listener);
    onDestroy(() => {
        server.off('request', listener);
    });
    innet(children, handler);
};

export { api };
