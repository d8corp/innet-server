import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';

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
