import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const endpointContext = new Context();
function useEndpoint() {
    const endpoint = useContext(endpointContext);
    if (!endpoint) {
        useThrow('Use <{type}> in <endpoint>');
    }
    return endpoint;
}

export { endpointContext, useEndpoint };
