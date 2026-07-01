import { useNewHandler, innet } from 'innet';
import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useBlock } from '../../../hooks/useBlock/useBlock.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { tupleOf } from '../../../utils/rules/tupleOf/tupleOf.mjs';
import { useParentRule, parentRuleContext } from '../../../hooks/useParentRule/useParentRule.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useRule, ruleContext } from '../../../hooks/useRule/useRule.mjs';
import { required } from '../../../utils/rules/required/required.mjs';
import { useEffect } from '../../../hooks/useEffect/useEffect.mjs';

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
