import innet from 'innet';
import { Context } from '@innet/jsx';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

const accessContext = new Context({});
function access({ props, children }, handler) {
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <access> inside <action>');
    }
    const { handleRole } = accessContext.get(handler);
    const role = props === null || props === void 0 ? void 0 : props.role;
    if (!handleRole) {
        return innet(children, handler);
    }
    const error = handleRole(role, handler);
    if (error) {
        return innet(error, handler);
    }
    return innet(children, handler);
}

export { access, accessContext };
