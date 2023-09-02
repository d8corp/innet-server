import { Context, useContext } from '@innet/jsx';

const serverContext = new Context();
function useServer() {
    const server = useContext(serverContext);
    if (!server) {
        throw Error('Use `useServer` in <server>');
    }
    return server;
}

export { serverContext, useServer };
