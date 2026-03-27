'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useHost = require('../../../hooks/useHost/useHost.js');

const variable = () => {
    const { server } = useHost.useHost();
    const { key, values, 
    // predefine
    value = values === null || values === void 0 ? void 0 : values[0], ...rest } = jsx.useProps();
    if (!server.variables) {
        server.variables = {};
    }
    // @ts-expect-error: FIXME
    server.variables[key] = { ...rest, default: value, enum: values };
};

exports.variable = variable;
