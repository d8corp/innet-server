'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var useObjectRule = require('../../../hooks/useObjectRule/useObjectRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var required = require('../../../utils/rules/required/required.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const field = () => {
    const handler = innet.useNewHandler();
    const { key, optional } = jsx.useProps();
    const schema = useSchemaContext.useSchemaContext();
    const children = jsx.useChildren();
    if (Array.isArray(schema) || (schema === null || schema === void 0 ? void 0 : schema.type) !== 'object') {
        throw Error('Use <field> inside <object>');
    }
    if (!schema.properties) {
        schema.properties = {};
    }
    if (schema.properties[key]) {
        throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`);
    }
    const fieldSchema = {};
    useSchemaContext.schemaContext.set(handler, fieldSchema);
    schema.properties[key] = fieldSchema;
    if (!optional) {
        if (!schema.required) {
            schema.required = [];
        }
        schema.required.push(key);
    }
    const map = useObjectRule.useObjectRule();
    useRule.ruleContext.set(handler, rule => {
        if (optional) {
            map[key] = rule;
        }
        else {
            map[key] = required.required(rule);
        }
    });
    useObjectRule.objectRuleContext.set(handler, null);
    innet__default["default"](children, handler);
};

exports.field = field;
