import { useNewHandler, innet } from 'innet';
import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { tupleOf } from '../../../utils/rules/tupleOf/tupleOf.es6.js';
import { useParentRule, parentRuleContext } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule, ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { required } from '../../../utils/rules/required/required.es6.js';
import { useEffect } from '../../../hooks/useEffect/useEffect.es6.js';

const tuple = () => {
    useBlock('path');
    const handler = useNewHandler();
    const { children, ...props } = useProps();
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const schema = useSchemaType('array', props);
    if (schema) {
        const schemas = [];
        handler[schemaContext.key] = schemas;
        // @ts-expect-error: FIXME
        schema.prefixItems = schemas;
        if (hasRules) {
            const rulesMap = [];
            const rules = [];
            if (props.default !== undefined) {
                rules.push(defaultTo(props.default));
                rules.push(tupleOf(rulesMap));
            }
            else {
                const parentRule = useParentRule();
                rules.push(parentRule(tupleOf(rulesMap)));
            }
            const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
            useRule(rule);
            parentRuleContext.set(handler, rule => required(rule));
            ruleContext.set(handler, rule => {
                rulesMap.push(rule);
            });
            useEffect(() => {
                if (!rulesMap.length) {
                    throw Error('<tuple> MUST have content');
                }
            });
        }
        innet(children, handler);
    }
};

export { tuple };
