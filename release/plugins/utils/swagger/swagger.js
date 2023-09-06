'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var swagger$1 = require('./swagger.html.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useRequestPlugin = require('../../../hooks/useRequestPlugin/useRequestPlugin.js');

const swagger = () => {
    const { path = '/swagger-ui' } = jsx.useProps() || {};
    const { docs, prefix } = useApi.useApi();
    let swaggerResponse;
    useRequestPlugin.useRequestPlugin(action => {
        if (action.req.url === prefix + path) {
            if (!swaggerResponse) {
                swaggerResponse = swagger$1["default"].replace('spec: {},', `spec: ${JSON.stringify(docs)},`);
            }
            action.res.statusCode = 200;
            action.res.write(swaggerResponse);
            action.res.end();
            return true;
        }
    });
};

exports.swagger = swagger;
