import { useContext } from '@innet/jsx';
import '../useAction/index.mjs';
import '../useEndpoint/index.mjs';
import '../useParams/index.mjs';
import '../useThrow/index.mjs';
import { useEndpoint } from '../useEndpoint/useEndpoint.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';
import { useAction } from '../useAction/useAction.mjs';
import { paramsContext } from '../useParams/useParams.mjs';

function useData(from, path, preventThrow) {
    if (path) {
        const endpoint = useEndpoint();
        const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`;
        if (endpointKey !== path) {
            if (preventThrow) {
                return undefined;
            }
            else {
                useThrow(`<{type}> MUST be in <endpoint> of ${path}`);
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
