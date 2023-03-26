import innet from 'innet';
import { validation as validation$1 } from '@cantinc/utils';
import { Context } from '@innet/jsx';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

const validationContext = new Context({});
function validation({ props, children }, handler) {
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <validation> inside <action>');
    }
    const { map, resource = 'body' } = props;
    const run = () => {
        const data = action[resource];
        if (!data)
            throw Error(`cannot find ${resource} in action`);
        const result = validation$1(map, data);
        if (result) {
            const { handleError } = validationContext.get(handler);
            return handleError ? innet(handleError(result), handler) : undefined;
        }
        return innet(children, handler);
    };
    if (resource === 'body' || resource === 'files') {
        return action.parseBody().then(run);
    }
    return run();
}

export { validation, validationContext };
