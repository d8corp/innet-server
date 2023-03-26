import innet from 'innet';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

function parseBody({ props, children }, handler) {
    return actionContext.get(handler).parseBody().then(() => innet(children, handler));
}

export { parseBody };
