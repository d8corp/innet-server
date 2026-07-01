import { Context, useContext } from '@innet/jsx';

const hostContext = new Context();
function useHost() {
    const host = useContext(hostContext);
    if (!host) {
        throw Error('Use `useHost` in <host>');
    }
    return host;
}

export { hostContext, useHost };
