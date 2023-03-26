import innet from 'innet';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

function header({ props: { name, value }, children }, handler) {
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <header> inside <action>');
    }
    action.res.setHeader(name, value);
    return innet(children, handler);
}

export { header };
