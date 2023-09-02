'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var utils = require('@innet/utils');
var constants = require('../../../constants.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var getOrAdd = require('../../../utils/getOrAdd/getOrAdd.js');
var useBodyFile = require('../../../hooks/useBodyFile/useBodyFile.js');
var useRule = require('../../../hooks/useRule/useRule.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const body = () => {
    const endpoint = jsx.useContext(useEndpoint.endpointContext);
    if (!endpoint) {
        throw Error('<body> MUST be placed in <endpoint> element');
    }
    const children = jsx.useChildren();
    const { operation } = endpoint;
    if (!operation.requestBody) {
        operation.requestBody = {
            content: {},
        };
    }
    const requestBody = operation.requestBody;
    for (const type of constants.allBodyTypes) {
        if (requestBody.content[type]) {
            throw Error(`<body type="${type}"> already used`);
        }
    }
    const handler = innet.useNewHandler();
    const schema = {};
    useSchemaContext.schemaContext.set(handler, schema);
    const rules = getOrAdd.getOrAdd(endpoint, 'endpoint.rules', [{}, {}]);
    let fileUsed = false;
    useBodyFile.bodyFileContext.set(handler, () => {
        fileUsed = true;
    });
    useRule.ruleContext.set(handler, rule => {
        rules.body = rule;
    });
    innet__default["default"](children, handler);
    innet__default["default"](() => {
        if (fileUsed) {
            requestBody.content['multipart/form-data'] = { schema };
        }
        else {
            for (const type of constants.allBodyTypes) {
                requestBody.content[type] = { schema };
            }
        }
    }, utils.callHandler);
};

exports.body = body;
