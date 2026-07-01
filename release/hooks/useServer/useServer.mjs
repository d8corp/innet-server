import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const serverContext = new Context();
function useServer() {
    const server = useContext(serverContext);
    if (!server) {
        useThrow('Use <{type}> in <server>');
    }
    return server;
}

export { serverContext, useServer };
