import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const serverHttpsContext = new Context();
function useIsServerHttps() {
    const https = useContext(serverHttpsContext);
    if (https === undefined) {
        useThrow('{type} MUST BE in <server>');
    }
    return https;
}

export { serverHttpsContext, useIsServerHttps };
