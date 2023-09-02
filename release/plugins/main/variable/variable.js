'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useHost = require('../../../hooks/useHost/useHost.js');

const variable = () => {
    const { server } = useHost.useHost();
    const _a = jsx.useProps(), { key, values, value = values === null || values === void 0 ? void 0 : values[0] } = _a, rest = tslib.__rest(_a, ["key", "values", "value"]);
    if (!server.variables) {
        server.variables = {};
    }
    // @ts-expect-error: FIXME
    server.variables[key] = Object.assign(Object.assign({}, rest), { default: value, enum: values });
};

exports.variable = variable;
