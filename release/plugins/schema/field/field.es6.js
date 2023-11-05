import innet, { useNewHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useObjectSchemaContext } from '../../../hooks/useObjectSchemaContext/useObjectSchemaContext.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { useObjectRule, objectRuleContext } from '../../../hooks/useObjectRule/useObjectRule.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { required } from '../../../utils/rules/required/required.es6.js';

const field = () => {
    const handler = useNewHandler();
    const { deprecated, key, optional, } = useProps();
    const schema = useObjectSchemaContext();
    const children = useChildren();
    if (!schema.properties) {
        schema.properties = {};
    }
    if (schema.properties[key]) {
        throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`);
    }
    const fieldSchema = {};
    schemaContext.set(handler, fieldSchema);
    if (deprecated) {
        fieldSchema.deprecated = true;
    }
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
