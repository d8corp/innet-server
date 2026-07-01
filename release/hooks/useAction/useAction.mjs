import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const actionContext = new Context();
function useAction() {
    const action = useContext(actionContext);
    if (!action) {
        useThrow('<{type}> MUST be in <return> or <preset>');
    }
    return action;
}

export { actionContext, useAction };
