'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@cantinc/utils');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var rapidoc = require('./rapidoc.html.js');
var redoc = require('./redoc.html.js');
var scalar = require('./scalar.html.js');
var swagger = require('./swagger.html.js');
var useServer = require('../../../hooks/useServer/useServer.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');
var useAction = require('../../../hooks/useAction/useAction.js');

function camelToDash(str) {
    return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
const uiPresets = { rapidoc: rapidoc["default"], redoc: redoc["default"], scalar: scalar["default"], swagger: swagger["default"] };
const ui = () => {
    const { initUI } = useServer.useServer();
    const props = jsx.useProps() || {};
    const { html = uiPresets.swagger, params = {}, path = process.env.INNET_UI_PATH || '/ui', } = props;
    initUI(props);
    const { docs, prefix, } = useApi.useApi();
    let cache = '';
    useServerPlugin.useServerPlugin(() => {
        const action = useAction.useAction();
        if (action.path === prefix + path) {
            if (!cache) {
                const attributes = Object
                    .keys(params)
                    .reduce((res, key) => {
                    return `${res} ${camelToDash(key)}='${String(params[key])}'`;
                }, '');
                cache = utils.placeholder(html, {
                    apiUrl: prefix,
                    attributes,
                    docs: JSON.stringify(docs),
                    params: JSON.stringify(params),
                    ...params,
                });
            }
            action.res.statusCode = 200;
            action.res.write(cache);
            action.res.end();
            return true;
        }
    });
};

exports.ui = ui;
exports.uiPresets = uiPresets;
