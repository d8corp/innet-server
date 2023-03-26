import innet from 'innet';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

function formatter({ props, children }, handler) {
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <formatter> inside <action>');
    }
    const { map, resource = 'body' } = props;
    const run = () => {
        const data = action[resource];
        if (!data)
            throw Error(`cannot find ${resource} in action`);
        for (const key in map) {
            if (key in data) {
                for (const format of map[key]) {
                    data[key] = format(data[key]);
                }
            }
        }
        return innet(children, handler);
    };
    if (resource === 'body' || resource === 'files') {
        return action.parseBody().then(run);
    }
    return run();
}

export { formatter };
