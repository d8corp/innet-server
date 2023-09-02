import { Context, useContext } from '@innet/jsx';
import '../../utils/index.es6.js';
import { optional } from '../../utils/rules/optional/optional.es6.js';

const parentRuleContext = new Context(rule => optional(rule));
function useParentRule() {
    return useContext(parentRuleContext);
}

export { parentRuleContext, useParentRule };
