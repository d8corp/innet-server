import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const actionContext = new Context();
function useAction() {
    const action = useContext(actionContext);
    if (!action) {
        useThrow('<{type}> MUST be in <request>, <preset> or <fallback>');
    }
    return action;
}

export { actionContext, useAction };
