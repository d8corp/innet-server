import { Context, useContext } from '@innet/jsx';

const responseContext = new Context();
function useResponse() {
    return useContext(responseContext);
}

export { responseContext, useResponse };
