'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var getSafeSchema = require('../../../utils/getSafeSchema/getSafeSchema.js');
var useObjectSchemaContext = require('../../../hooks/useObjectSchemaContext/useObjectSchemaContext.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var useObjectRule = require('../../../hooks/useObjectRule/useObjectRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var required = require('../../../utils/rules/required/required.js');

const field = () => {
    const handler = innet.useNewHandler();
    const { children, deprecated, key, optional, readOnly, writeOnly, } = jsx.useProps();
    const schema = getSafeSchema.getSafeSchema(useObjectSchemaContext.useObjectSchemaContext());
    if (!schema.properties) {
        schema.properties = {};
    }
    if (schema.properties[key]) {
        throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`);
    }
    const fieldSchema = {};
    useSchemaContext.schemaContext.set(handler, fieldSchema);
    if (deprecated) {
        fieldSchema.deprecated = true;
    }
    if (readOnly) {
        fieldSchema.readOnly = true;
    }
    if (writeOnly) {
        fieldSchema.writeOnly = true;
    }
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
    innet.innet(children, handler);
};

exports.field = field;
