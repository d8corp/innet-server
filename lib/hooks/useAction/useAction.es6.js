import { Context, useContext } from '@innet/jsx';

const actionContext = new Context();
function useAction() {
    const action = useContext(actionContext);
    if (!action) {
        throw Error('Use `useAction` in <action>');
    }
    return action;
}

export { actionContext, useAction };
