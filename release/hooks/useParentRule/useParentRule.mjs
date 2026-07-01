import { Context, useContext } from '@innet/jsx';
import '../../utils/index.mjs';
import { optional } from '../../utils/rules/optional/optional.mjs';

const parentRuleContext = new Context(rule => optional(rule));
function useParentRule() {
    return useContext(parentRuleContext);
}

export { parentRuleContext, useParentRule };
