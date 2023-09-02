import { Context, useContext } from '@innet/jsx';

const paramsContext = new Context({});
function useParams() {
    return useContext(paramsContext);
}

export { paramsContext, useParams };
