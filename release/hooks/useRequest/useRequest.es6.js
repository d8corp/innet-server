import { Context, useContext } from '@innet/jsx';

const requestContext = new Context();
function useRequest() {
    return useContext(requestContext);
}

export { requestContext, useRequest };
