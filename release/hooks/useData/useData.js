'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useAction/index.js');
require('../useEndpoint/index.js');
require('../useParams/index.js');
require('../useThrow/index.js');
var useEndpoint = require('../useEndpoint/useEndpoint.js');
var useThrow = require('../useThrow/useThrow.js');
var useAction = require('../useAction/useAction.js');
var useParams = require('../useParams/useParams.js');

function useData(from, path, preventThrow) {
    if (path) {
        const endpoint = useEndpoint.useEndpoint();
        const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`;
        if (endpointKey !== path) {
            if (preventThrow) {
                return undefined;
            }
            else {
                useThrow.useThrow(`<{type}> MUST be in <endpoint> of ${path}`);
            }
        }
    }
    const action = useAction.useAction();
    if (!action) {
        useThrow.useThrow('<{type}> MUST be in <return> or <preset>');
    }
    if (from === 'params') {
        return jsx.useContext(useParams.paramsContext);
    }
    return action[from];
}

exports.useData = useData;
