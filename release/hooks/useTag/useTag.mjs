import { Context, useContext } from '@innet/jsx';

const tagContext = new Context();
function useTag() {
    return useContext(tagContext);
}

export { tagContext, useTag };
