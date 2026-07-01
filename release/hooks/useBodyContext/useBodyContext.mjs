import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const bodyContext = new Context();
function useBodyContext() {
    const context = useContext(bodyContext);
    if (!context) {
        useThrow('<{type}> MUST be in <body>');
    }
    return context;
}

export { bodyContext, useBodyContext };
