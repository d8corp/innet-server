import { Context, useContext } from '@innet/jsx';

const apiContext = new Context();
function useApi() {
    const api = useContext(apiContext);
    if (!api) {
        throw Error('Use `useApi` in <api>');
    }
    return api;
}

export { apiContext, useApi };
