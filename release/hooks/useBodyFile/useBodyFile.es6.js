import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const bodyFileContext = new Context();
function useBodyFile() {
    const bodyFile = useContext(bodyFileContext);
    if (!bodyFile) {
        useThrow('<{type}> MUST be in <body>');
    }
    bodyFile();
}

export { bodyFileContext, useBodyFile };
