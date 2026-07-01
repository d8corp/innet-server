import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';

const any = () => {
    const props = useProps();
    useSchemaType('any', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (!hasRules)
        return;
    const rules = [];
    if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
        rules.push(defaultTo(props.default));
    }
    if ((props === null || props === void 0 ? void 0 : props.default) === undefined) {
        const parentRule = useParentRule();
        useRule(parentRule(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { any };
