import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const serverPortContext = new Context();
function useServerPort() {
    const port = useContext(serverPortContext);
    if (!port) {
        useThrow('{type} MUST BE in <server>');
    }
    return port;
}

export { serverPortContext, useServerPort };
