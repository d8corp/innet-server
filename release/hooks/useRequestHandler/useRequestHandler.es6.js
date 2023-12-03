import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const requestHandlerContext = new Context();
function useRequestHandler() {
    const handler = useContext(requestHandlerContext);
    if (!handler) {
        useThrow('You cannot use useRequestHandler inside {type}, this hook can be used only in a request component');
    }
    return handler;
}

export { requestHandlerContext, useRequestHandler };
