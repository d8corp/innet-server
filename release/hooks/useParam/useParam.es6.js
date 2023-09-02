import { Context, useContext } from '@innet/jsx';

const paramContext = new Context();
function useParam() {
    const param = useContext(paramContext);
    if (!param) {
        throw Error('`useParam` MUST be used in <param>');
    }
    return param;
}

export { paramContext, useParam };
