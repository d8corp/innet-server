import { useContext } from '@innet/jsx';
import '../useAction/index.es6.js';
import '../useEndpoint/index.es6.js';
import '../useParams/index.es6.js';
import '../useThrow/index.es6.js';
import { useEndpoint } from '../useEndpoint/useEndpoint.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';
import { useAction } from '../useAction/useAction.es6.js';
import { paramsContext } from '../useParams/useParams.es6.js';

function useData(from, path, withThrow) {
    if (path) {
        const endpoint = useEndpoint();
        const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`;
        if (endpointKey !== path) {
            if (withThrow) {
                useThrow(`<{type}> MUST be in <endpoint> of ${path}`);
            }
            else {
                return undefined;
            }
        }
    }
    const action = useAction();
    if (!action) {
        useThrow('<{type}> MUST be in <return> or <preset>');
    }
    if (from === 'params') {
        return useContext(paramsContext);
    }
    return action[from];
}

export { useData };
