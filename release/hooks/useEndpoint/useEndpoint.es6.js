import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const endpointContext = new Context();
function useEndpoint() {
    const endpoint = useContext(endpointContext);
    if (!endpoint) {
        useThrow('Use <{type}> in <endpoint>');
    }
    return endpoint;
}

export { endpointContext, useEndpoint };
