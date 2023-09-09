import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const serverContext = new Context();
function useServer() {
    const server = useContext(serverContext);
    if (!server) {
        useThrow('Use <{type}> in <server>');
    }
    return server;
}

export { serverContext, useServer };
