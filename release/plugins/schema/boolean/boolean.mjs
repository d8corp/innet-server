import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useBlock } from '../../../hooks/useBlock/useBlock.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';

const boolean = () => {
    useBlock('path');
    const props = useProps();
    useSchemaType('boolean', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (!hasRules)
        return;
    const rules = [];
    if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
        rules.push(defaultTo(props.default));
    }
    rules.push(val => val === 'true' || (val === 'false' ? false : Boolean(val)));
    const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
    if (props.default === undefined) {
        const parentRule = useParentRule();
        useRule(parentRule(rule));
    }
    else {
        useRule(rule);
    }
};

export { boolean };
