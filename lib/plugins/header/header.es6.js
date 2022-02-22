import innet from 'innet';
import { ACTION } from '../../action/Action/Action.es6.js';

function header({ props: { name, value }, children }, handler) {
    const { res } = handler[ACTION];
    res.setHeader(name, value);
    return innet(children, handler);
}

export { header };
