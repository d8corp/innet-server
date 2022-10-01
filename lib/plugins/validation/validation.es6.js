import { validation as validation$1 } from '@cantinc/utils';
import { Context } from '@innet/jsx';
import { ACTION } from '../../action/Action/Action.es6.js';

const validationContext = new Context({
    handleError: () => { },
});
function validation({ props, children }, handler) {
    const action = handler[ACTION];
    if (!action) {
        throw Error('`validation` should be inside `server`');
    }
    const { map, resource = 'body' } = props;
    const run = () => {
        const data = action[resource];
        if (!data)
            throw Error(`cannot find ${resource} in action`);
        return validation$1(map, data).then(e => {
            if (e) {
                return validationContext.get(handler).handleError(e);
            }
            return children;
        });
    };
    if (resource === 'body' || resource === 'files') {
        return action.parseBody().then(run);
    }
    return run();
}

export { validation, validationContext };
