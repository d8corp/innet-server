import innet, { useNewHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useSchemaContext, schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { useObjectRule, objectRuleContext } from '../../../hooks/useObjectRule/useObjectRule.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { required } from '../../../utils/rules/required/required.es6.js';

const field = () => {
    const handler = useNewHandler();
    const { key, optional } = useProps();
    const schema = useSchemaContext();
    const children = useChildren();
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
    schemaContext.set(handler, fieldSchema);
    schema.properties[key] = fieldSchema;
    if (!optional) {
        if (!schema.required) {
            schema.required = [];
        }
        schema.required.push(key);
    }
    const map = useObjectRule();
    ruleContext.set(handler, rule => {
        if (optional) {
            map[key] = rule;
        }
        else {
            map[key] = required(rule);
        }
    });
    objectRuleContext.set(handler, null);
    innet(children, handler);
};

export { field };
