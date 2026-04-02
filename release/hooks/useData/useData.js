'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
require('../useEndpoint/index.js');
require('../useThrow/index.js');
var useEndpoint = require('../useEndpoint/useEndpoint.js');
var useThrow = require('../useThrow/useThrow.js');
var useAction = require('../useAction/useAction.js');

function useData(from, path) {
    if (path) {
        const endpoint = useEndpoint.useEndpoint();
        const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`;
        if (endpointKey !== path) {
            useThrow.useThrow(`<{type}> MUST be in <endpoint> of ${path}`);
        }
    }
    const action = useAction.useAction();
    if (!action) {
        useThrow.useThrow('<{type}> MUST be in <return> or <preset>');
    }
    return action[from];
}

exports.useData = useData;
