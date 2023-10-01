import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const serverPortContext = new Context();
function useServerPort() {
    const port = useContext(serverPortContext);
    if (!port) {
        useThrow('{type} MUST BE in <server>');
    }
    return port;
}

export { serverPortContext, useServerPort };
