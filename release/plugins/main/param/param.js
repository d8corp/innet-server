'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../../utils/rules/index.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var getOrAdd = require('../../../utils/getOrAdd/getOrAdd.js');
var objectOf = require('../../../utils/rules/objectOf/objectOf.js');
var useParam = require('../../../hooks/useParam/useParam.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var required = require('../../../utils/rules/required/required.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const inMap = {
    query: 'search',
    path: 'path',
    cookie: 'cookie',
    header: 'header',
};
const param = () => {
    var _a;
    const { operation, endpoint } = useEndpoint.useEndpoint();
    if (!operation.parameters) {
        operation.parameters = [];
    }
    const children = jsx.useChildren();
    const props = jsx.useProps();
    const params = Object.assign({}, props);
    if (props.in === 'path') {
        params.required = (_a = params.required) !== null && _a !== void 0 ? _a : true;
    }
    operation.parameters.push(params);
    if (!children)
        return;
    const handler = innet.useNewHandler();
    const schema = {};
    params.schema = schema;
    useSchemaContext.schemaContext.set(handler, schema);
    const rulesMap = getOrAdd.getOrAdd(endpoint, `rulesMaps.${inMap[props.in]}`, [{}, {}]);
    const oneOfRulesMap = {};
    const key = props.name;
    getOrAdd.getOrAdd(endpoint, `rules.${inMap[props.in]}`, [{}, objectOf.objectOf(rulesMap)]);
    useParam.paramContext.set(handler, { props });
    useRule.ruleContext.set(handler, rule => {
        const override = params.required ? required.required : (e) => e;
        if (key in rulesMap) {
            if (key in oneOfRulesMap) {
                oneOfRulesMap[key].push(rule);
            }
            else {
                oneOfRulesMap[key] = [rulesMap[key], rule];
                rulesMap[key] = override(oneOf.oneOf(oneOfRulesMap[key]));
            }
        }
        else {
            rulesMap[key] = override(rule);
        }
    });
    innet__default["default"](children, handler);
};

exports.param = param;
