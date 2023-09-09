import innet, { useHandler } from 'innet';
import { Context, useChildren, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useServer } from '../../../hooks/useServer/useServer.es6.js';
import { Action } from '../../../utils/action/Action.es6.js';
import { actionContext } from '../../../hooks/useAction/useAction.es6.js';

const presetCondition = new Context(() => true);
function preset() {
    const { server } = useServer();
    const handler = useHandler();
    const children = useChildren();
    const condition = useContext(presetCondition);
    const listener = (req, res) => {
        const action = new Action(req, res);
        if (condition(action)) {
            const newHandler = Object.create(handler);
            actionContext.set(newHandler, action);
            innet(children, newHandler);
        }
    };
    server.addListener('request', listener);
}

export { preset, presetCondition };
