import innet from 'innet';
import { Context } from '@innet/jsx';
import { ACTION } from '../../action/Action/Action.es6.js';

const accessContext = new Context({});
function access({ props, children }, handler) {
    const action = handler[ACTION];
    if (!action) {
        throw Error('`access` should be inside `server`');
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
