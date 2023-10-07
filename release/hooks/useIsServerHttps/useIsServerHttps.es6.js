import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const serverHttpsContext = new Context();
function useIsServerHttps() {
    const https = useContext(serverHttpsContext);
    if (https === undefined) {
        useThrow('{type} MUST BE in <server>');
    }
    return https;
}

export { serverHttpsContext, useIsServerHttps };
