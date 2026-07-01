import { useNewHandler, innet } from 'innet';
import { useProps, useContext } from '@innet/jsx';
import { formatObjectChildren } from './helpers.mjs';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useBlock } from '../../../hooks/useBlock/useBlock.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { objectSchemaContext } from '../../../hooks/useObjectSchemaContext/useObjectSchemaContext.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';
import { useEffect } from '../../../hooks/useEffect/useEffect.mjs';
import { getSafeSchema } from '../../../utils/getSafeSchema/getSafeSchema.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { objectOf } from '../../../utils/rules/objectOf/objectOf.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useRule, ruleContext } from '../../../hooks/useRule/useRule.mjs';
import { objectRuleContext } from '../../../hooks/useObjectRule/useObjectRule.mjs';

const object = () => {
    useBlock('path');
    const { children, ...props } = useProps();
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const { refRules } = useApi();
    const schema = useSchemaType('object', props);
    const handler = useNewHandler();
    if (schema) {
        schema.additionalProperties = {};
        objectSchemaContext.set(handler, schema);
        schemaContext.set(handler, schema.additionalProperties);
        parentRuleContext.reset(handler);
        useEffect(() => {
            const safeSchema = getSafeSchema(schema);
            if (!Object.keys(safeSchema.additionalProperties).length) {
                delete safeSchema.additionalProperties;
            }
        });
        if (hasRules) {
            const rules = [];
            const rulesMap = {};
            if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
                rules.push(defaultTo(props.default));
            }
            let childRule = v => v;
            const restRule = (value, data) => childRule(value, data);
            if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
                rules.push(objectOf(rulesMap, restRule));
            }
            else {
                const parentRule = useParentRule();
                rules.push(parentRule(objectOf(rulesMap, restRule)));
            }
            const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
            if (props.ref) {
                refRules[props.ref] = rule;
            }
            useRule(rule);
            objectRuleContext.set(handler, rulesMap);
            ruleContext.set(handler, rule => {
                childRule = rule;
            });
            parentRuleContext.reset(handler);
        }
        innet(formatObjectChildren(children), handler);
    }
    else if (props.ref && hasRules) {
        useRule(refRules[props.ref]);
    }
};

export { object };
