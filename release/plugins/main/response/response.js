'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../request/index.js');
var error = require('../../request/error/error.js');
var redirect = require('../../request/redirect/redirect.js');
var success = require('../../request/success/success.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useThrow = require('../../../hooks/useThrow/useThrow.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var getOrAdd = require('../../../utils/getOrAdd/getOrAdd.js');
var useRule = require('../../../hooks/useRule/useRule.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const statuses = Object.assign(Object.assign(Object.assign({}, error.errorStatuses), redirect.redirectStatuses), success.successStatuses);
const response = () => {
    let { description = '', status = 'default' } = jsx.useProps() || {};
    const { operation, props: { path } } = useEndpoint.useEndpoint();
    const children = jsx.useChildren();
    const handler = innet.useNewHandler();
    const endpoint = jsx.useContext(useEndpoint.endpointContext);
    if (status in statuses) {
        status = statuses[status];
    }
    if (!endpoint) {
        useThrow.useThrow('<{type}> MUST be placed in <endpoint> element');
    }
    if (!operation.responses) {
        operation.responses = {};
    }
    if (operation.responses[status]) {
        throw Error(`status ${status} for '${path}' already used`);
    }
    const schema = {};
    const response = {
        description,
        content: {
            'application/json': {
                schema,
            },
        },
    };
    operation.responses[status] = response;
    useSchemaContext.schemaContext.set(handler, schema);
    const rules = getOrAdd.getOrAdd(endpoint, 'endpoint.rules', [{}, {}]);
    useRule.ruleContext.set(handler, rule => {
        rules.response = rule;
    });
    innet__default["default"](children, handler);
};

exports.response = response;
exports.statuses = statuses;
