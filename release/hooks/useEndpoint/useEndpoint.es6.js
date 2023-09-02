import { Context, useContext } from '@innet/jsx';

const endpointContext = new Context();
function useEndpoint() {
    const endpoint = useContext(endpointContext);
    if (!endpoint) {
        throw Error('useEndpoint MUST be used in <endpoint>');
    }
    return endpoint;
}

export { endpointContext, useEndpoint };
