import { useNewHandler, innet } from 'innet';
import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { objectSchemaContext } from '../../../hooks/useObjectSchemaContext/useObjectSchemaContext.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useEffect } from '../../../hooks/useEffect/useEffect.es6.js';
import { getSafeSchema } from '../../../utils/getSafeSchema/getSafeSchema.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { objectOf } from '../../../utils/rules/objectOf/objectOf.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule, ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { objectRuleContext } from '../../../hooks/useObjectRule/useObjectRule.es6.js';

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
        innet(children, handler);
    }
    else if (props.ref && hasRules) {
        useRule(refRules[props.ref]);
    }
};

export { object };
