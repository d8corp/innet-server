import { useNewHandler, innet } from 'innet';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { getSafeSchema } from '../../../utils/getSafeSchema/getSafeSchema.mjs';
import { useObjectSchemaContext } from '../../../hooks/useObjectSchemaContext/useObjectSchemaContext.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { useObjectRule, objectRuleContext } from '../../../hooks/useObjectRule/useObjectRule.mjs';
import { ruleContext } from '../../../hooks/useRule/useRule.mjs';
import { required } from '../../../utils/rules/required/required.mjs';

const field = () => {
    const handler = useNewHandler();
    const { children, deprecated, description, key, optional, readOnly, title, writeOnly, } = useProps();
    const schema = getSafeSchema(useObjectSchemaContext());
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
    if (title) {
        fieldSchema.title = title;
    }
    if (description) {
        fieldSchema.description = description;
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
