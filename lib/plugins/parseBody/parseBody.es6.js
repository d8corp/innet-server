import innet from 'innet';
import { ACTION } from '../../action/Action/Action.es6.js';

function parseBody({ props, children }, handler) {
    return handler[ACTION].parseBody().then(() => innet(children, handler));
}

export { parseBody };
