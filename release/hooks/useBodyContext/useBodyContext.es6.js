import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const bodyContext = new Context();
function useBodyContext() {
    const context = useContext(bodyContext);
    if (!context) {
        useThrow('<{type}> MUST be in <body>');
    }
    return context;
}

export { bodyContext, useBodyContext };
